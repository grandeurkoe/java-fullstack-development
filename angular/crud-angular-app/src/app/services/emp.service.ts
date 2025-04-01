import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private myHttpData: HttpClient) { }

  url: string = "http://localhost:3000/employees";

  getEmployees() {
    return this.myHttpData.get(this.url);
  }

  getEmployeeById(id: any) {
    return this.myHttpData.get(this.url + "/" + id);  
  }

  saveEmployee(empData: any) {
    return this.myHttpData.post(this.url, empData);
  }

  deleteEmployee(id: any) {
    return this.myHttpData.delete(this.url + "/" + id);
  }

  updateEmployee(id: any, body: any) {
    return this.myHttpData.put(this.url + "/" + id, body);
  }
}
