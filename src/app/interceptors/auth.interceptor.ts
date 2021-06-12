import { UserService } from '../login/user.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        return from(this.handleAccess(req, next));
    }

    async handleAccess(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    let token = this.userService.getToken();

    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    });

        return next.handle(req).toPromise();
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
