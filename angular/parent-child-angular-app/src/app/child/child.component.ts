import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() welcomeMessage: string = '';  // Receiving data from the parent
  @Input() newMessageOne: string = '';
  @Input() newMessageTwo: string = '';
  @Input() newMessageThree: string = '';

  @Output() myEvent = new EventEmitter<string>();  // Sending data to the parent

  hello(value: any) {
    alert("This is a hello function with value: " + value);
  }
}
