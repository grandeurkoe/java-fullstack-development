import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my Angular Application!';
  numberOne = 100;
  numberTwo = 200;
  sum = this.numberOne + this.numberTwo;
}
