'use strict';
//Functions in Java Script
// parameters are defined when declaring(defining the function)
// arguments are passed during the function call

// this is basic function declaration syntax
function myName() {
    console.log("My name is Mesh");
}
console.log(myName());//function call

console.log();//inbuilt function

//1.)Function declaration

function calcAge(birthYear, firstName,currentYear) {
    const age = currentYear - birthYear;
    console.log(`${firstName} is ${age} years old`);
    return age;
}
calcAge(1970,'John',2023);

//2.Function Expression AKA anonymous functions
// The result/ the outcome of a function expression is a value

const result =function (a, b) {
    return a + b;
}
console.log(result(2, 3));

const product = function (x, y) {
    return x * y;
}
console.log(product(3,3));

//3. Arrow Function
const addNum = (a, b) => a + b;
console.log(addNum(2,2));

const prod = (a, b) => a * b;
console.log(prod(2,3));


/**
 * this
 */
