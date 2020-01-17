import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Business } from 'src/app/_models/';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private apiURL = 'localhost:3000';

  constructor(private http: HttpClient) { }

  // Get all Companies
  getAll() {
    return this.http.get<Business[]>(`${this.apiURL}users/company`);
}

  // Register a Companey
  create(company: Business) {
      return this.http.post(`${this.apiURL}users/company`, company);
  }

  // Delete a Companey
  delete(id: number) {
      return this.http.delete(`${this.apiURL}/users/company/${id}`);
  }

  // Get a single company.
  getCompany(id: number) {
    return this.http.get(`${this.apiURL}/users/company/${id}`);
  }

  // Update a company
  update(id: number, change: string) {
      return this.http.put(`${this.apiURL}/user/company${id}`, change);
  }

}
