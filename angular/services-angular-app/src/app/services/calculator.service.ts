import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add (numberOne : any, numberTwo: any) : number{
    return parseInt(numberOne) + parseInt(numberTwo);
  }

  multiply (numberOne : number, numberTwo: number) : number{
    return numberOne * numberTwo;
  }

  subtract (numberOne : number, numberTwo: number) : number{
    return numberOne - numberTwo;
  }

  divide (numberOne : number, numberTwo: number) : number{
    return numberOne / numberTwo;
  }
}
