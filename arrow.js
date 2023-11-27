/**
 * Functions in J.S have an array-like object called an arguments object
 * It stores arguments passed to that specific function
 */
// function add (x,y,z){
//     let total = x + y + z;
//     console.log(arguments);
//     //arguments object will allow us access to the arguments passed to this function 
//     return total;
// }
// console.log(add(1,2,3));
 
/**
 * However arrow functions do not have the arguments object,
 * so we have to use the rest parameter
 */

const sum = (a,b,...args) => {
    let total = a + b;
    for (const arg of args){
        total += arg
    }
    return total;
};
console.log(sum(1,2,3,4,5));