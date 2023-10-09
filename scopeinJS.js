/**
 * scope refers to the visibility of variables.
 * Variables which are defined outside of a function block have Global scope.
 * This means, they can be seen everywhere in your JavaScript code.
 * Variables which are declared without the let or const keywords are automatically created in the global scope.
 *
 */

/**
 * Local Scope in J.S
 * Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
 */
/**
 * It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
 */
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
/**
 * This function will return Head because the one in the function takes precedence over the one declared globally
 */

/**
 *

A function can include the return statement but it does not have to.
In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

 */
let sum = 0;

function addSum(num) {
    sum = sum + num;
    //console.log(sum);
}

addSum(3);
console.log(sum);
console.log('\n');
//////////////////////////////

let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);
