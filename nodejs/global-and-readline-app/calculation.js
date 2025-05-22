const rd = require('readline');
const interface = rd.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

interface.question("Enter a number: ", (numberOne) => {
    interface.question("Enter another number: ", (numberTwo) => {
        let first = parseInt(numberOne);
        let second = parseInt(numberTwo);
        let sum = first + second;
        console.log(`Sum of ${first} and ${second} is ${sum}.`);
        interface.close();
    })
})