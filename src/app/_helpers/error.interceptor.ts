import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, finalize, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      retry(1),
      catchError((err) => {
        console.log('INTERCEPTOR');
        if (err) {
          switch (err.status) {
            case 0:
              console.log('Inside Case 0');
              console.log(err.statusText);
              console.log(err.message);
              console.log(err.error.type);
              break;
            case 400:
                console.log(err.error);
                
              break;
          }
        }
        return throwError(err);
      })
    );
  }
}
