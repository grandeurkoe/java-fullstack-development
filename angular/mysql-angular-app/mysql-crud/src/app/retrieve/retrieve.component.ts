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

  deleteCustomer(custid: any) {
    this.customerService.deleteCustomer(custid).subscribe(
      (data: any) => {  // Cast response to 'any'
        if (data.status === true) {
          alert(data.message);  // Success message
          this.ngOnInit();  // Re-fetch the customer data after deletion
        } else {
          alert('Failed to delete the customer: ' + data.message);
        }
      },
      (error) => {
        console.error('Error deleting customer:', error);
        alert('An error occurred while deleting the customer');
      }
    );
  }

  editCustomer(custid: any) {
  }
  

}
