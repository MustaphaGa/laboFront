import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './services/user/user.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private userservice: UserService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
   Observable<HttpEvent<unknown>> {
    console.log(request)
    
    const accessToken = this.userservice.getToken();
    

    // SI token à insérer dans le header
   if(accessToken !== null){
      let clone = request.clone({
        headers:request.headers.set('Authorization','bearer '+ accessToken)
      })
      console.log(clone)
     
    }
    /*const localtoken = localStorage.getItem('token');
    request=request.clone({headers:request.headers
      .set('Authorization','Bearer '+localtoken)})
    */
    return next.handle(request);
  }
}
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: Interceptor,
  multi: true
}

  

