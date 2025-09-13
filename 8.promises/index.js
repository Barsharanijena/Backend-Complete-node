function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve, time))

}

console.log('Promise lecture starts')
delayFn(2000).then(()=> console.log('after 2 seconds promise resolved'));
console.log("end");


function divide