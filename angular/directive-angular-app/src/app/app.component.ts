import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-angular-app';
  studentList = [
    {rollNo: 101, name: "Vivek", course: "Java", fees: 55000},
    {rollNo: 102, name: "Vishal", course: "DOTNet", fees: 45000},
    {rollNo: 103, name: "Meena", course: "Java", fees: 55000},
    {rollNo: 104, name: "Ram", course: "Java", fees: 55000},
    {rollNo: 105, name: "Shweta", course: "DOTNet", fees: 45000},
    {rollNo: 106, name: "Kiran", course: "Oracle", fees: 25000},
  ]

  employeeList = [
    {empNo: 101, empName: "Kiran", skills: [
      {skillId: 1, skill: "Java", exp: "2 years"},   
      {skillId: 2, skill: "SQL Server", exp: "1 years"},
      {skillId: 3, skill: "Anguular", exp: "1 years"},            
    ]},
    {empNo: 102, empName: "Harshad", skills: [
      {skillId: 1, skill: "HTML", exp: "3 years"},   
      {skillId: 2, skill: "JavaScript", exp: "2 years"},
      {skillId: 3, skill: "NodeJS", exp: "2 years"}            
    ]},
    {empNo: 103, empName: "Vivek", skills: [
      {skillId: 1, skill: "CSS", exp: "3 years"},   
      {skillId: 2, skill: "Hibernate", exp: "1 years"},
      {skillId: 3, skill: "ReactJS", exp: "2 years"}            
    ]},
    {empNo: 104, empName: "Vishal", skills: [
      {skillId: 1, skill: "Bootstrap", exp: "3 years"},   
      {skillId: 2, skill: "Python", exp: "2 years"},
      {skillId: 3, skill: "RestAPI", exp: "1 years"}             
    ]}
  ]
}
