var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.welcome = function () {
        console.log("Welcome to Session!");
    };
    return Greeting;
}());
var GoodMorning = /** @class */ (function (_super) {
    __extends(GoodMorning, _super);
    function GoodMorning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoodMorning.prototype.goodMorning = function () {
        console.log("Good Morning!");
    };
    return GoodMorning;
}(Greeting));
var greet = new GoodMorning();
greet.welcome();
greet.goodMorning();
