import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  kind: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    const body = { email, password, returtSecureToken: true };
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqoJDLLp7UvZnA12LKB4S-xQ3GY7W0YRU',
        body
      )
      .pipe(
        catchError((errorResponse) => {
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

            default:
              break;
          }
          return throwError(errorMessage);
        })
      );
  }
}
