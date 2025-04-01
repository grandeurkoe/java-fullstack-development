var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 6);
var area = rectangle.calculateArea();
console.log("Area of Rectangle: ".concat(area, "."));
