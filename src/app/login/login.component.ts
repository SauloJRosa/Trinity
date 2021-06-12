import { Router } from '@angular/router';
import { UserService } from './user.service';
import { ConnectionApiService } from '../services/connection-api.service';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  processLoggedIn = false;;
  credentials = {
    email: "",
    senha: "",
    provider: "NATIVO",
    nickname: "",
    tokenProvider: ""
  }

  GoogleLoginProvider = GoogleLoginProvider;

  constructor(
    private authService: SocialAuthService,
    private service: ConnectionApiService,
    private userService: UserService,
    private route: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      if(user){
        switch (user.provider) {
          case 'FACEBOOK':
            this.loggedFB();
            break;

          case 'GOOGLE':
            this.loggedGO();
            break;

          default:
            break;
        }
      }

    });
  }

  signInWithGoogle(): void {
    event.preventDefault();
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    event.preventDefault();
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  loggedFB(){
    this.credentials.email = this.user.email;
    this.credentials.provider = "FACEBOOK";
    this.credentials.nickname = this.user.name;
    this.credentials.tokenProvider = this.user.authToken;
    this.testeLogin();
  }

  loggedGO(){
    this.credentials.email = this.user.email;
    this.credentials.provider = "GOOGLE";
    this.credentials.nickname = this.user.name;
    this.credentials.tokenProvider = this.user.authToken;
    this.testeLogin();
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  testeLogin(){
    event.preventDefault();
    this.processLoggedIn = true;
    this.service.login(this.credentials).subscribe(
      resp => {
        this.userService.setToken(resp.token);
        this.loggedIn = true;
        this.userService.setloggedIn(true);
        this.route.navigate(['/home'])
      },
      error => {
        console.log("Ocorreu algum erro");
        this.processLoggedIn = false;
      }
      );

  }

}
