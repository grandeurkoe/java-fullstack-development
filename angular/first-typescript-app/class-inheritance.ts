class Greeting {
    welcome() {
        console.log(`Welcome to Session!`);
    }
}

class GoodMorning extends Greeting {
    goodMorning() {
        console.log(`Good Morning!`)
    } 
}

var greet = new GoodMorning();
greet.welcome();
greet.goodMorning();