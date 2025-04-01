import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  numberOne: any = 200;
  numberTwo: any = 200;
  result: number = 0;
  resultTwo: number = 0;
  addition() {
    this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);
  }
  additionAgain() {
    this.resultTwo = parseInt(this.numberOne) + parseInt(this.numberTwo);
  }
  subtraction() {
    this.resultTwo = parseInt(this.numberOne) - parseInt(this.numberTwo);
  }
  division() {
    this.resultTwo = parseInt(this.numberOne) / parseInt(this.numberTwo);
  }
  multiplication() {
    this.resultTwo = parseInt(this.numberOne) * parseInt(this.numberTwo);
  }
  modulo() {
    this.resultTwo = parseInt(this.numberOne) % parseInt(this.numberTwo);
  }
}
