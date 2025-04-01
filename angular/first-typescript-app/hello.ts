// Single Line Comment.

/*
Multi-Line Comments.
*/

console.log("Welcome to TypeScript!");

var x = 100;
var y = 200;
var sum = x + y;
console.log("Sum of " + x + " and " + y + " is " + sum + ".");

// Use backquote(`) instead of single-quote(').
console.log(`Addition of ${x} and ${y} is ${sum}.`);


// TypeScript Data Types.

// String
var s_name = "Harshad";

// To explicitly specify a variable as String.
var course: string = "TypeScript Fundamentals";

console.log(`Welcome ${s_name} to session.\nCourse selected: ${course}.`);

// Number
var fees = 4500000;
console.log(`Fees: ${fees}.`)

// Any
var my_Var: any = "Vishal";
console.log(`Faculty: ${my_Var}.`);
my_Var = 101;
console.log(`Faculty: ${my_Var}.`);


// Boolean
var permanent_Status: boolean = true;
console.log(`Status: ${permanent_Status}.`);