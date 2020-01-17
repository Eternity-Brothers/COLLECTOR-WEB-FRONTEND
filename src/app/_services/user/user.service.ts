import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/_models/';
import { catchError } from 'rxjs/operators';
import { UserAccountService } from './user-account.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'localhost:3000';



  constructor(private http: HttpClient, private userAccount: UserAccountService) { }

  // Get all app users
  getAll() {
    return this.http.get<User[]>(`${this.apiURL}/users`);
}

// Register a user
register(user: User) {
    return this.http.post(`${this.apiURL}/users/register`, user).pipe( map((user: User) => {
      // Evoke the UserAccountService to login the user.
      this.userAccount.LoginUser(user);
  }), catchError(err => {
    if (err.status === 402) {
      return 'error';
    }
  }));
}

// Delete a user.
delete(id: number) {
    return this.http.delete(`${this.apiURL}/users/${id}`);
}

// Read user
  get(id: number) {
    return this.http.get(`${this.apiURL}/users/${id}`);
  }

// Update user
  update(id: number, change: string) {
    return this.http.put(`${this.apiURL}/user/company${id}`, change);
  }
}
