import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
    // // Activated Route is the current route i.e. localhost:4200/update/3
    // constructor(private cust: CustomerService, private myRoute: ActivatedRoute) {}

    // empData: any;
    // empId: any;
  
    // ngOnInit(): void {
    //   this.myRoute.paramMap.subscribe((queryString) => {
    //     this.empId = queryString.get('id');
    //   });
    //   this.cust.getCustomerById(this.empId).subscribe((data) => {
    //     this.empData = data;
    //   });
    // }
  
    // editEmp(updateData: NgForm) {
    //   this.cust.updateCustomer(this.empId, updateData.value).subscribe((data) => {
    //     alert("Employee update successfully!");
    //   });
    // }
}
