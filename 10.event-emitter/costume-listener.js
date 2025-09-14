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

const MyCostomEmitter = new MyCostomEmitter();

MyCostomEmitter.on('greeting', (input)=>{
    console.log('Greeting event', input)
});

MyCostomEmitter.greet("Barsharani Jena");