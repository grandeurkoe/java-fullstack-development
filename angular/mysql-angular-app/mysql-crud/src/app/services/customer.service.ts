import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = "http://localhost:8089";

  constructor(private httpRouter: HttpClient) { }

  getAllCustomers () {
    return this.httpRouter.get(this.baseUrl + "/api/customer/getall");
  }

  saveCustomer(custData: any) {
    return this.httpRouter.post(this.baseUrl + "/api/customer/save", custData);
  }
}
