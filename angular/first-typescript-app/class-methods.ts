class EmployeeThree {
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

    display() {
        console.log(`${this.empNumber} \t${this.empName} \t${this.designation} \t\t${this.salary}`);
    }
}
var newEmployeeList: EmployeeThree[] = [
    new EmployeeThree(101, "Shweta", "Manager", 50000),
    new EmployeeThree(102, "Meena", "Sales Executive", 40000),
    new EmployeeThree(103, "Ram", "I.T.", 40000),
];

console.log(`No. \tName \tDesignation \t\tSalary`);
for (let emp of newEmployeeList) {
    emp.display();
}