//the rest parameter is what we use to create variadic functions in javascript

function add(a,b, ...args){
    let x = a;
    let y = b;
    let total = 0;

    //take not of the for of loop to loop over an array
    for (const arg of args){
        total += arg;
    }

    console.log(x,y);
    return total
}
console.log(add(1,2,5,5,6));
/**
 * Also take note that 1 and 2 were mapped to a and b
 * then 5,5,6 were mapped to the args array
 */