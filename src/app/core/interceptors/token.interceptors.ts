import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner/spinner.service';


@Injectable({
  providedIn: 'root',
})

export class TokenInterceptor implements HttpInterceptor {


  constructor(private spinnerService :SpinnerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.includes(environment.api_url)){
      this.spinnerService.showHide(true);
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse)=>{
          return throwError(error);
        }),
        finalize(() =>{
          this.spinnerService.showHide(false);
        } )
        );
    }
    else{
      return next.handle(request);
    }
  }
}
