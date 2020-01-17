import { Injectable } from '@angular/core';
// import { NgxIndexedDB } from 'ngx-indexed-db';


@Injectable({
  providedIn: 'root'
})
export class DBconfigService {

  private DBName: string;
  private DBVersion: number;
 // private DB: NgxIndexedDB;

  constructor( ) {
      this.DBName = 'Collector';
      this.DBVersion = 1;
   }

  GetDB() {
    // return this.DB;
  }

}
