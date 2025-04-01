import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  // Activated Route is the current route i.e. localhost:4200/update/3
  constructor(private emps: EmpService, private myRoute: ActivatedRoute) {}

  empData: any;
  empId: any;

  ngOnInit(): void {
    this.myRoute.paramMap.subscribe((queryString) => {
      this.empId = queryString.get('id');
    });
    this.emps.getEmployeeById(this.empId).subscribe((data) => {
      this.empData = data;
    });
  }

  editEmp(updateData: NgForm) {
    this.emps.updateEmployee(this.empId, updateData.value).subscribe((data) => {
      alert("Employee update successfully!");
    });
  }

}
