const EventEmitter = require('events');
const newEvent = new EventEmitter();

var functionOne = (message) => {
    console.log("Message from functionOne: " + message);
}

var functionTwo = (message) => {
    console.log("Message from functionTwo: " + message);
}

newEvent.on('firstEvent', functionOne);
newEvent.on('firstEvent', functionTwo);
newEvent.on('firstEvent', functionOne);

newEvent.emit('firstEvent', "Hello everyone!");

newEvent.removeAllListeners('firstEvent');

newEvent.emit('firstEvent', "Hello everyone!");