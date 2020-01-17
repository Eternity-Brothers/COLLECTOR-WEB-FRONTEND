import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {User} from '../../_models';
import { DBconfigService } from '../dbconfig.service';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  private response: string;

  private user: User;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(DB: DBconfigService) {
   // this.Database = DB.GetDB();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  userID(): number {
    // TODO: Return the current user ID.
    // This returns the current user.
    this.user = this.currentUserSubject.value;
    return this.user.id;
  }

  public LoginUser(user: User) {
    // TODO: implement a login user system on user-account.
  }

  public LogoutUser() {
    // TODO: implement a logout user method on user-account
    // The logout method retrieves the user to log out and delete the user database.
  }


  // Fake data is used to fake data from the user account.

  // Register a user.
  public RegisterUser(user: any) {
    // Register the user service

  }
}
