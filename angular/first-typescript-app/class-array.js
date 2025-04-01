var EmployeeTwo = /** @class */ (function () {
    function EmployeeTwo(empNumber, empName, designation, salary) {
        this.empNumber = empNumber;
        this.empName = empName;
        this.designation = designation;
        this.salary = salary;
    }
    return EmployeeTwo;
}());
var employeeList = [
    new EmployeeTwo(101, "Shweta", "Manager", 50000),
    new EmployeeTwo(102, "Meena", "Sales Executive", 40000),
    new EmployeeTwo(103, "Ram", "I.T.", 40000),
];
for (var _i = 0, employeeList_1 = employeeList; _i < employeeList_1.length; _i++) {
    var emp = employeeList_1[_i];
    console.log("".concat(emp.empNumber, " \t").concat(emp.empName, " \t").concat(emp.designation, " \t\t").concat(emp.salary));
}
