import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-angular-app';
  greeting = "Welcome child, I'm your parent!";
  messageOne = "Good morning!!!";
  messageTwo = "Good afternoon!!!";
  messageThree = "Good night!!!";
  dataFromChild: any;

  updatedData(item: any) {
    this.dataFromChild = item;  // Update dataFromChild with the emitted value
  }
}
