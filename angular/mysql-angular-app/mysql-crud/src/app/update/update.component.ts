import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
    // Activated Route is the current route i.e. localhost:4200/update/3
    constructor(private cust: CustomerService, private myRoute: ActivatedRoute, private retrieveRoute: Router) {}

    custData: any;
    custid: any;
    firstname: string = "";
    lastname: string = "";
    email: string = "";
    cellno: string = "";
    isResultLoaded = false;
  
    ngOnInit(): void {
      this.custid = this.myRoute.snapshot.paramMap.get('id');
      this.cust.getCustomerById(this.custid).subscribe((result : any) => {
        console.log(result.data);
        this.custData = result.data;
        this.firstname = this.custData[0].firstname;
        this.lastname = this.custData[0].lastname;
        this.email = this.custData[0].email;
        this.cellno = this.custData[0].cellno;
      })
    }
  
    editCust(updateData: NgForm) {
      this.cust.updateCustomer(this.custid, updateData.value).subscribe((result) => {
        this.isResultLoaded = true;
        alert("Customer updated successfully!");
        this.retrieveRoute.navigateByUrl("/retrieve");
      });
    }
}
