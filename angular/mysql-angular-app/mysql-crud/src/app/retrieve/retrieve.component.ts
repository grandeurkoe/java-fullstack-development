import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  customerData: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    // Fetch the customer data when the component initializes
    this.customerService.getAllCustomers().subscribe((resultData: any) => {
      console.log(resultData); // Log the entire response to the console
      if (resultData && resultData.status === "OK") {
        this.customerData = resultData.data; // Use the data property
      } else {
        console.error('Failed to fetch customer data', resultData);
      }
    });
  }
}
