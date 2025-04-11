import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = "";
  password: string = "";

  constructor(private auth: AuthenticationService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((query) => {
      const logout = query.get('logout');
      if (logout) {
        this.auth.logout();
        alert("You are now logged out!");
      }
    })
  }

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
