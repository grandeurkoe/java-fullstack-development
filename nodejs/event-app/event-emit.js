const EventEmitter = require('events');
const newEvent = new EventEmitter();

newEvent.on('firstEvent', () => {
    console.log("firstEvent occurred!");
});

newEvent.on('secondEvent', ()=> {
    console.log("secondEvent occurred!");
});

newEvent.emit('firstEvent');
newEvent.emit('secondEvent');