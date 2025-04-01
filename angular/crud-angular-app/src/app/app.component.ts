import { Component, OnInit } from '@angular/core';
import { EmpService } from './services/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'crud-angular-app';
  constructor(private router: Router) { }

  createEmployee() {
    this.router.navigateByUrl("/create");
  }
}
