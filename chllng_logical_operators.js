'use strict';


// console.log([] == ![]);

// const myarr = [2, 5, 6];

// const myotherarr = [2, 5, 6];

// console.log(myarr === myotherarr);


// const mpesaBalance = 0;
// if (!mpesaBalance) {
//     console.log("Do you wish to Fuliza ?");
// } else {
//     console.log("Your Fuliza Balance is 200");
// }

/*
function calculateTip(billAmount) {
    if (billAmount >= 50 && billAmount <= 300) {
        tipPercentage = 15;
} else {
    tipPercentage = 20;
}
tipAmount = billAmount * tipPercentage / 100;
totalAmount = billAmount + tipAmount;
return `The bill amount is ${billAmount} and the total amount is ${totalAmount}`;
}
console.log(calculateTip(275));
console.log(calculateTip(48));
console.log(calculateTip(430)); mesh nisaidie kudebug

*/

/*
function tipCalculator(bill){
    if(bill <= 300 && bill >= 50){
        bill = bill + (0.15 * bill)
    }
    else{
        bill = bill + (0.2 * bill)
    }
    return bill
}

console.log(tipCalculator(275))
console.log(tipCalculator(48))
console.log(tipCalculator(430))

*/

const billval1 = 275
const billval2 = 48
const billval3 = 430

let tippercentage;
let billval;
let tipval;
let total;

if (billval1 >= 50 && billval1 <= 300) {
    tippercentage = 0.15;
} else {
    tippercentage = 0.20;
}

billval = billval1;
tipval = billval * tippercentage;
total = tipval + billval;
console.log(`Your Bill: $${billval}, Your Tip: $${tipval}, YourTotal: $${total}`);

if (billval2 >= 50 && billval2 <= 300) {
    tippercentage = 0.15;
} else {
    tippercentage = 0.20;
}

billval = billval2;
tipval = billval * tippercentage;
total = tipval + billval;
console.log(`Your Bill: $${billval}, Your Tip: $${tipval}, YourTotal: $${total}`);

if (billval3 >= 50 && billval3 <= 300) {
    tippercentage = 0.15;
} else {
    tippercentage = 0.20;
}

billval = billval3;
tipval = billval * tippercentage;
total = tipval + billval;
console.log(`your Bill: $${billval}, Your Tip: $${tipval}, Your Total: $${total}`);
