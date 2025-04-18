// Function without parameters and return value.
function add() {
    var x = 100;
    var y = 100;
    var sum = x + y;
    console.log(`Sum of ${x} and ${y} is ${sum}.`);
}

// Function with paramater and without return value.
function addTwo (x: number, y: number) {
    var sum = x + y;
    console.log(`Sum of ${x} and ${y} is ${sum}.`);
}

// Function with parameters and return value.
function addThree (x: number, y: number): number {
    return x + y;
}

// Function with no parameters and a return value.
function addFour (): number {
    var x = 12;
    var y = 13;
    return x + y;
}


var x = 10;
var y = 20;
add();
addTwo(100, 200);
console.log(`Sum of ${x} and ${y} is ${addThree(x, y)}.`);
console.log(`Sum is ${addFour()}.`);