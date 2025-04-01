var EmployeeThree = /** @class */ (function () {
    function EmployeeThree(empNumber, empName, designation, salary) {
        this.empNumber = empNumber;
        this.empName = empName;
        this.designation = designation;
        this.salary = salary;
    }
    EmployeeThree.prototype.display = function () {
        console.log("".concat(this.empNumber, " \t").concat(this.empName, " \t").concat(this.designation, " \t\t").concat(this.salary));
    };
    return EmployeeThree;
}());
var newEmployeeList = [
    new EmployeeThree(101, "Shweta", "Manager", 50000),
    new EmployeeThree(102, "Meena", "Sales Executive", 40000),
    new EmployeeThree(103, "Ram", "I.T.", 40000),
];
console.log("No. \tName \tDesignation \t\tSalary");
for (var _i = 0, newEmployeeList_1 = newEmployeeList; _i < newEmployeeList_1.length; _i++) {
    var emp = newEmployeeList_1[_i];
    emp.display();
}
