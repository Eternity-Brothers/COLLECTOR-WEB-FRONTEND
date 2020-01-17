import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';
import {UserAccountService} from './user/user-account.service';
import {UserService} from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiURL = 'localhost:3000';

  constructor(private userAccount: UserAccountService, private userService: UserService, private http: HttpClient) { }

  login( username, password) {
    // No error handling if user email was not found.
    return this.http.post<User>(`${this.apiURL}/users/login`, { username, password })
        .pipe( map((user: User) => {

            // Evoke the UserAccountService to login the user.
            this.userAccount.LoginUser(user);
        }));
}

logout() {

    // Remove user through the injected account service.
    this.userAccount.LogoutUser();

}
}
