import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Request is on its way: ', req.url);
    const modifiedHeaders = req.clone({
      headers: req.headers.append('my-header', 'Leo'),
    });
    return next.handle(modifiedHeaders).pipe(
      tap((event) => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log('Response arrived: ');
          console.log(event.body);
        }
      })
    );
  }
}
