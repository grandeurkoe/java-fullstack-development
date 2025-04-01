class Student {
    rollNo: number;
    studentName: string;
    courseName: string;
    fees: number;
}

var student = new Student();
student.rollNo = 101;
student.studentName = "Vishal Kushwaha";
student.courseName = "Java";
student.fees = 75000;
console.log(`Roll No.: ${student.rollNo}`);
console.log(`Name: ${student.studentName}`);
console.log(`Course: ${student.courseName}`);
console.log(`Fees: ${student.fees}`);