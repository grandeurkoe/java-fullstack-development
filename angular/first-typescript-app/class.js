var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var student = new Student();
student.rollNo = 101;
student.studentName = "Vishal Kushwaha";
student.courseName = "Java";
student.fees = 75000;
console.log("Roll No.: ".concat(student.rollNo));
console.log("Name: ".concat(student.studentName));
console.log("Course: ".concat(student.courseName));
console.log("Fees: ".concat(student.fees));
