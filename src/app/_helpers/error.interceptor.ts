import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';


import { UserAccountService } from '../_services/user/user-account.service';
import { AlertService } from '../_alert';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private userAccount: UserAccountService, private alertService: AlertService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(map(object =>{
            return object;
        }

        ));
    }
}
