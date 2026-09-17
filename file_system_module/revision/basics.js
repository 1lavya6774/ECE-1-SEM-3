console.log("hello world");
console.log("start");
for(let i=0; i<10; i++){
    console.log(i);
}
console.log("end");
setTimeout(() => {
    console.log("timeout");
}, 1000);

console.log("synchronous code");
Promise.resolve().then(() => {
    console.log("promise resolved");
});
setTimeout(() => {
    console.log("timeout 2");
}, 2000);





