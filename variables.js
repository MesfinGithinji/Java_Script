/**
 * In J.S uninitialized variables have a default value of undefined
 * Any mathematical operation on such a variable will result in NaN(Not a number)
 *
 * In J.S we use var , let and const to declare and initialize variables
 * var - problem 1 is that you can easily override the initial value assigned
 *
 */

var firstName = "Mesh";
// this will output Mesh in the console
console.log(firstName);
var firstName = "Mike";
//this will output Mike
console.log(firstName);

/**
 * let was introduced in ES6 to fix this issue
 * if you use let in the above code , it will not allow variable re-declaration and reassignment
 * So unlike var, when you use let, a variable with the same name can only be declared once.
 */

/**
 * const was also introduced in ES6 as a feature to declare read-only variables
 * any variable declared with const cannot change.
 */

const PI = 3.142;
console.log(PI);
//output is 3.142
PI = 3.21 //this will throw a TypeError: Assignment to constant variable.
console.log(PI);
