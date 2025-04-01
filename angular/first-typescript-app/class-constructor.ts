class Employee {
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

var employee = new Employee(101, "Shweta", "Manager", 50000);
var employeeTwo = new Employee(102, "Meena", "Sales Executive", 40000);

// Creating array.
var employeeList: Employee[] = [];
employeeList.push(employee);
employeeList.push(employeeTwo);

for (let emp of employeeList) {
    console.log(`${emp.empNumber} \t${emp.empName} \t${emp.designation} \t\t${emp.salary}`);
}

// console.log(employee);
// console.log(employeeTwo);