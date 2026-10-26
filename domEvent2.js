console.log("start");

process.nextTick(() => {
    console.log("nextTick callback");// acyncronous 
});
setTimeout(() => {
    console.log("setTimeout callback");
}, 5000);
setImmediate(() => {
    console.log("setImmediate callback");
});
console.log("end");