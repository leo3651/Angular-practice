import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  kind: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: Subject<User> = new Subject();

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    const body = { email, password, returtSecureToken: true };
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqoJDLLp7UvZnA12LKB4S-xQ3GY7W0YRU',
        body
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    const body = { email, password, returtSecureToken: true };
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqoJDLLp7UvZnA12LKB4S-xQ3GY7W0YRU',
        body
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          console.log('Exp', this);
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn
          );
        })
      );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);

    let errorMessage = 'An unknown error occured!';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists.';
        break;

      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'This opertaion is not allowed.';
        break;

      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'We have blocked all requests from this device due to unusual activity. Try again later.';
        break;

      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Invalid login credentials.';
        break;

      case 'USER_DISABLED':
        errorMessage = 'User is disabled.';
        break;

      default:
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuth(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: string
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, localId, idToken, expirationDate);
    this.user.next(user);
  }
}
