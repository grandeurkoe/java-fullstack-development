import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-angular-app';
  numberOne: number = 0;
  numberTwo: number = 0;
  result: number = 0;

  constructor(private clser:CalculatorService) {}

  add() {
    this.result = this.clser.add(this.numberOne, this.numberTwo);
  }

  multiply() {
    this.result = this.clser.multiply(this.numberOne, this.numberTwo);
  }

  subtract() {
    this.result = this.clser.subtract(this.numberOne, this.numberTwo);
  }

  divide() {
    this.result = this.clser.divide(this.numberOne, this.numberTwo);
  }

}
