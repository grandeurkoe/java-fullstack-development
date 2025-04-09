import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private auth: AuthenticationService, private router: Router) {}

  loginUser() {
    let newUser = this.auth.login(this.username, this.password);
    if (newUser == undefined) {
      alert("Invalid User!");
      this.router.navigateByUrl("/login");
    } else {
      alert("Welcome to the Session, " + newUser.name + "!");
      this.router.navigateByUrl("/contact");
    }
  }
}
