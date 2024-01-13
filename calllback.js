function isOdd(number){
    return number % 2 != 0 ;
} //callback function 

function isEven(number){
    return number % 2 == 0;
}

function getnumber(numbers,func){
    let results = [];

    for (const num of numbers){
        if(func(num)){
            results.push(num);
        }
    }
    return results;
} //high-order function 

let numbers = [1,2,4,7,3,5,6];
console.log(getnumber(numbers,isOdd));
console.log(getnumber(numbers,isEven));



/**
 * Two types of callback functions
 * 1. synchronous functions
 * 2. asynchronous functions
 */


