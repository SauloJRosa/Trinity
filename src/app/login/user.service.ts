import { SocialAuthService } from 'angularx-social-login';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private siblingMsg = new Subject<boolean>();

constructor(private authService: SocialAuthService) { }

setToken(token){
  localStorage.setItem('token',token);
}

getToken(){
  return localStorage.getItem('token');
}

signOut(): void {
  this.setloggedIn(false);
  this.authService.signOut();
}

public getloggedIn(): Observable<boolean> {
  return this.siblingMsg.asObservable();
}

public setloggedIn(message: boolean): void {
  this.siblingMsg.next(message);
}

}
