import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogged: boolean = false;

  constructor(private userauth: UserService) { }

  login(username: string, password: string) {
    let user = this.userauth.users.find((u) => u.username == username &&  u.password == password);
    if (user == undefined) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
    return user;
  }

  logout() {
    this.isLogged = false;
  }

  isAuthenticated() {
    return this.isLogged;
  }
}
