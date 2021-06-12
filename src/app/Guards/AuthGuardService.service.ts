import { UserService } from '../login/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    private hasJWT: boolean = false;
    private userInfo: any;

    constructor(private userService: UserService, private route: Router) {
        this.getUserInfo();
        this.hasJWT = (this.userInfo);
    }

    private getUserInfo() {
        this.userInfo = this.userService.getToken();
    }

    canActivate() {
        if(!this.hasJWT) {
             this.route.navigate(['/login'])
            return false;
        }
        return true;
    }
}
