// Function without parameters and return value.
function add() {
    var x = 100;
    var y = 100;
    var sum = x + y;
    console.log("Sum of ".concat(x, " and ").concat(y, " is ").concat(sum, "."));
}
// Function with paramater and without return value.
function addTwo(x, y) {
    var sum = x + y;
    console.log("Sum of ".concat(x, " and ").concat(y, " is ").concat(sum, "."));
}
// Function with parameters and return value.
function addThree(x, y) {
    return x + y;
}
// Function with no parameters and a return value.
function addFour() {
    var x = 12;
    var y = 13;
    return x + y;
}
var x = 10;
var y = 20;
add();
addTwo(100, 200);
console.log("Sum of ".concat(x, " and ").concat(y, " is ").concat(addThree(x, y), "."));
console.log("Sum is ".concat(addFour(), "."));
