const getRandom = (start, end) => Math.floor(Math.random() * (end - start)) + start;

console.log(getRandom(3, 5)); 
console.log(getRandom(10, 15)); 
console.log(getRandom(-5, 0));