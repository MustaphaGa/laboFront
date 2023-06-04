import { Injectable } from '@angular/core';
import {AuthenticationService} from '../../../gs-api/src/services';
import { Router } from '@angular/router';
import {AuthenticationRequest} from '../../../gs-api/src/models/authentication-request';
import {AuthenticationReponse} from '../../../gs-api/src/models/authentication-reponse';
import {Observable, of} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private authenticationService: AuthenticationService,
    private  router:Router) {
  }

  // tslint:disable-next-line:typedef
  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationReponse> {

    return  this.authenticationService.authenticate(authenticationRequest);
  }
  setConnectedUser(authenticatorResponse: AuthenticationReponse): void{
    localStorage.setItem('connectedUser' ,JSON.stringify(authenticatorResponse));
  }
  //TODO
  isUserLoggedAndAcessTokenValid(){
    if(localStorage.getItem('connectedUser')) {
      //IL FAUT verfier si le access token est valid
      return true;
    }
    this.router.navigate(['pagAccPrincp']);
    return  false;

  }


}
