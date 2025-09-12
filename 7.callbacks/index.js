// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{

//         })
//     })
//  })


const fs = require('fs');


function person(name,callbackFn){
    console.log(`Hello ${name}`);
    callbackFn();
};


function address(){
     console.log("India");
};
fs.writeFileSync('input.txt', 'callback logic concepts', 'utf8');
person('Sangam Muharjee', address)

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err){
        console.log('Error read file', err);
        return;
    }
    console.log(data);
});
