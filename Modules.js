// Example using Modules
//Example 1
export const add = (a, b) => a + b ;
export const subtract = (a, b) => a - b;
console.log(1,3);
console.log(5,9);


//Example 2
const math = require('./math.js');

console.log(math.add(2, 3));
console.log(math.subtract(5, 2)); 
