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

  deleteCustomer(id: any) {
    return this.httpRouter.delete(this.baseUrl + "/api/customer/delete/" + id);
  }

  updateCustomer(id: any, body: any) {
    return this.httpRouter.put(this.baseUrl + "/api/customer/edit/" + id, body);
  }
}
