import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { this.logged_in = false;}

  logged_in!:Boolean;

  login(){
    this.logged_in = true;
  }

  logout(){
    this.logged_in = false;
  }

  isLoggedIn(){
    return this.logged_in;
  }
}
