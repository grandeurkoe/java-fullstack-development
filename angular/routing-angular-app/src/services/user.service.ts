import { Injectable } from '@angular/core';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    new User(101, "Vishal Kushwaha",'vishal', '12345'),
    new User(102, "Meena Devi",'meena', '14545'),
    new User(103, "Shriram Kushwaha",'shriram', '54913'),
    new User(104, "Sunil Shetty",'sunil', '97645'),
    new User(105, "Rahul sharma",'rahul', '25489')
  ]

  constructor() { }
}
