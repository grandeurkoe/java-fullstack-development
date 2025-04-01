import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{
  constructor(private emps: EmpService) {}

  empNewData: any

  saveFormData(empFormData: NgForm) {
    this.emps.saveEmployee(empFormData.value).subscribe(data => {
      this.empNewData = data;
      console.log(this.empNewData);
      alert("Data Saved Successfully");
    })
  }
}
