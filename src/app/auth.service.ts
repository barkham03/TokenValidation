import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'Bhvbwg9YX3O0UcPyzLirPlQqgtKeEyph',
    domain: 'dev-zxw8fc4c.auth0.com',
    responseType: 'token',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid'
  });
  accessToken: string;
  expiresAt: number;
  constructor(private route: Router) {
    console.log('in...');
  }

  public login(): void {
    console.log('login...');
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        console.log(authResult);
        window.location.hash = '';
        this.accessToken = authResult.accessToken;
        this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.route.navigate(['/dashboard']);
      } else if (err) {
        this.route.navigate(['/']);
        console.log(err);
      }
    });
  }

  public logout(): void {
    this.expiresAt = null;
    this.accessToken = null;
    this.route.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    return new Date().getTime() < this.expiresAt;
  }
}
