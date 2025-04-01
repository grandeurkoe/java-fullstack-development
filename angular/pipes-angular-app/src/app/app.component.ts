import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-angular-app';
  toDate: Date = new Date();
  myMessage: string = "This is a good string!";
  myNumber: number = 7864.2345;
  myPercent: number = .7414;
  myCurrency: number = 1750;
  myNewMessage: string = "welcome to angular!"
}
