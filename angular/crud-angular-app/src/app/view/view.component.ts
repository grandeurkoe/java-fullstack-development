import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private emp:EmpService, private updateRoute: Router) {}

  employees: any;

  getEmployeeData() {
    this.emp.getEmployees().subscribe((data) => {
      this.employees = data;
      console.log(data);
    })
  }

  deleteEmp(id: any) {
    this.emp.deleteEmployee(id).subscribe(data => {
      alert("Data Deleted Successfully!");
    })
  }

  editEmp(id: any) {
    this.updateRoute.navigateByUrl("/update/" + id);
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }
}
