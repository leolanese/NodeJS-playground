import { add, subtract, calc } from './mathModule.js';
// You can also import the default part of a module
import multiply from './mathModule.js';

console.log('add:' , add(2, 3)); // 5
console.log('subsctract: ',subtract(5, 2)); // 3
console.log('default (multiply): ', multiply(2, 3)); // prints 6
console.log('calc: ',calc.m(24)); // 12