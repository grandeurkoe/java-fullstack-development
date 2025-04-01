class EmployeeTwo {
    empNumber: number;
    empName: string;
    designation: string;
    salary: number;

    constructor(empNumber: number, empName: string, designation: string, salary: number) {
        this.empNumber = empNumber;
        this.empName = empName;
        this.designation = designation;
        this.salary = salary;
    }
}
var employeeList: EmployeeTwo[] = [
    new EmployeeTwo(101, "Shweta", "Manager", 50000),
    new EmployeeTwo(102, "Meena", "Sales Executive", 40000),
    new EmployeeTwo(103, "Ram", "I.T.", 40000),
];


for (let emp of employeeList) {
    console.log(`${emp.empNumber} \t${emp.empName} \t${emp.designation} \t\t${emp.salary}`);
}