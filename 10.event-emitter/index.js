const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

//register a listener
myFirstEmitter.oh('greet',(name)=> {
    console:log(`Hello ${name}`)
})

myFirstEmitter.emit('greet', "Barsharani Jena");

