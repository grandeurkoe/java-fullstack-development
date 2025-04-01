var Employee = /** @class */ (function () {
    function Employee(empNumber, empName, designation, salary) {
        this.empNumber = empNumber;
        this.empName = empName;
        this.designation = designation;
        this.salary = salary;
    }
    return Employee;
}());
var employee = new Employee(101, "Shweta", "Manager", 50000);
var employeeTwo = new Employee(102, "Meena", "Sales Executive", 40000);
// Creating array.
var employeeList = [];
employeeList.push(employee);
employeeList.push(employeeTwo);
for (var _i = 0, employeeList_1 = employeeList; _i < employeeList_1.length; _i++) {
    var emp = employeeList_1[_i];
    console.log("".concat(emp.empNumber, " \t").concat(emp.empName, " \t").concat(emp.designation, " \t\t").concat(emp.salary));
}
// console.log(employee);
// console.log(employeeTwo);
