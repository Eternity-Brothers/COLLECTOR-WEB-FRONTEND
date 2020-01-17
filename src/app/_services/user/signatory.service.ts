import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Signatory } from 'src/app/_models/';

@Injectable({
  providedIn: 'root'
})
export class SignatoryService {
  private apiURL: string = 'localhost:3000';


  constructor(private http: HttpClient) { }

  // Get all user Signatory
  getAll() {
    return this.http.get<Signatory[]>(`${this.apiURL}/users/signatories`);
}

// Register a Signatory
register(signatory: Signatory) {
    return this.http.post(`${this.apiURL}/users/signatory`, signatory);
}

// Delete a Signatory.
delete(id: number) {
    return this.http.delete(`${this.apiURL}/users/signatory/${id}`);
}

// Read Signatory
  get(id: number){
    return this.http.get(`${this.apiURL}/users/signatory/${id}`);
  }

// Update Signatory
  update(id: number, change: string){
    return this.http.put(`${this.apiURL}/user/signatory/${id}`, change);
  }
}
