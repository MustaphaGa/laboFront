import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationReponse} from '../../../gs-api/src/models/authentication-reponse';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements  HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authenticatorResponse: AuthenticationReponse = {};
    if (localStorage.getItem('accessToken')) {
      authenticatorResponse = JSON.parse(
        localStorage.getItem('accessToken') as string
      );
    }
    const authReq = request.clone({
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + authenticatorResponse.accessToken
      })
    });
    return next.handle(authReq);
  }
}








