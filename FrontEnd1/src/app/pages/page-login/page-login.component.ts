import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {AuthenticationRequest} from '../../../gs-api/src/models/authentication-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  authenticationRequest: AuthenticationRequest = {};
  errorMessage = ''
  constructor(
    private  userService: UserService,
    private  router: Router
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  login() {
    return this.userService.login(this.authenticationRequest)
      .subscribe(  (data)  => {
        this.userService.setConnectedUser(data);
        this.router.navigate(['']);
      }, error => {
        console.log(error);
        // this.router.navigate( ['register']);
        this.errorMessage = 'Login et /ou mot de passe incorrecte';

      });
  }

}
