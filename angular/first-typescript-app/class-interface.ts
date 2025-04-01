interface Shape {
    calculateArea() : number;
}

class Rectangle implements Shape {
    length: number;
    breadth: number;

    constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }
    calculateArea(): number {
        return this.length * this.breadth
    }
}

var rectangle = new Rectangle(5, 6);
var area = rectangle.calculateArea();
console.log(`Area of Rectangle: ${area}.`)