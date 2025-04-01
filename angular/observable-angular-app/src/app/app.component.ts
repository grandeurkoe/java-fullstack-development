import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable-angular-app';
  myObs = new Observable((data) => {
    data.next("Hello!");
    data.next("Good Morning!");
    data.next("Good Afternoon!");
    data.next("Good Evening!");
    data.next("Good Night!");
  });

  myOtherObs = new Observable((data) => {
    setTimeout(() => {data.next("Hello!")}, 1000);
    setTimeout(() => {data.next("Good Morning!")}, 2000);
    setTimeout(() => {data.next("Good Afternoon!")}, 3000);
    // setTimeout(() => data.error("Something went wrong!"), 2500);
    setTimeout(() => {data.next("Good Evening!")}, 4000);
    setTimeout(() => {data.next("Good Night!")}, 5000);
    setTimeout(() => {data.complete()}, 4500);
  });

  display() {
     this.myObs.subscribe((myData) => {
    console.log(myData);
  }) 
  }

  otherDisplay() {
    this.myOtherObs.subscribe((myData) => {
      console.log(myData);
  }, (error) => {
    console.log(error);
  }, () => {
    console.log("Task completed successfully!");
  })
  }
}
