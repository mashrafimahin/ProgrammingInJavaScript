const hour = 5;
const min = new Date().getMinutes();
const sec = new Date().getSeconds();

console.log(hour * 60 - min);
console.log(hour * 3600 - sec);
