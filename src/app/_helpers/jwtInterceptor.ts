import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserAccountService } from '../_services/user/user-account.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private userAccount: UserAccountService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.userAccount.currentUserValue;
        if (currentUser && currentUser.token) {// if current user have a token.
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}
