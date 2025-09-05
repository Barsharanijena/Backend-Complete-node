//module.exports
//require


const firstmodule = require("./first-module");

console.log(firstmodule.add(11,13));

try{
console.log('trying to devide by zero');
let result = firstmodule.divide(90,10);
console.log(result);
}catch(error){
console.log("caught an error" ,error.message);
}


//module wrapper
(
    function(exports,require)
)