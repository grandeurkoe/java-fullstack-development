import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private userauth: UserService) { }

  login(username: string, password: string) {
    let user = this.userauth.users.find((u) => u.username == username &&  u.password == password);
    return user;
  }
}
