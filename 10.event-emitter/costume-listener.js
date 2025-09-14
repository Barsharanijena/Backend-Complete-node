const EventEmitter = require("events");

class MyCostomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello'
    }
    greet(name){
        this.emit('greeting', `${this.greeting}, ${name}` )
    }
}

const emitter = new MyCostomEmitter();

emitter.on('greeting', (input)=>{
    console.log('Greeting event', input)
});
emitter.greet("Barsharani Jena");