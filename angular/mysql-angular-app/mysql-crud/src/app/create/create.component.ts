import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private cust:CustomerService) {}

  custNewData: any;

  saveFormData(custFormData: NgForm) {
    this.cust.saveCustomer(custFormData.value).subscribe(data => {
      this.custNewData = data;
      console.log(this.custNewData);
      alert("Data Saved Successfully");
    })
  }
}
