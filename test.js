'use strict';

/*
let firstName = 'Mesh';
let secondName = "Githinji";

let fullName = `My first name is:${firstName} \n My Second Name is ${secondName}`;
console.log(fullName);
*/

/*
Coding Challenge:

1. Calculate the Average score for each Team.
2. Use the ternary operator to compare the average score to find the winner

Teams only win if they have the higher score than the other team and a score of at least 100 points .
Draw only happens if both teams have the same score and both have a score that is grater or equal to 100 points

Manu = test data 1(96, 108 , 89) Test data 2(97,112,101)

Arsenal = test data 1(88 , 91 , 110) test data 2(109,95,123)

*/

/*
const manu_avgScore = (97 + 112 + 101) / 3;
const arsenal_avgScore = (109 + 95 + 123) / 3;
console.log(`manu avg score is:${manu_avgScore.toFixed(3)}`);
console.log(`arsenal avg score is:${arsenal_avgScore.toFixed(3)}`);

console.log(manu_avgScore > arsenal_avgScore ? 'Manu wins!!\n' : 'Arsenal Wins\n');

if (manu_avgScore > arsenal_avgScore && manu_avgScore >=100) {
    console.log(`Manu's score is ${manu_avgScore.toFixed(3)} and they win!!`);
} else if (arsenal_avgScore > manu_avgScore && arsenal_avgScore >=100) {
    console.log(`Arsenal's score is ${arsenal_avgScore.toFixed(3)} and they win!!`)
} else if (manu_avgScore === arsenal_avgScore && manu_avgScore >= 100 && arsenal_avgScore >=100) {
    console.log("It's a tie!!");
} else {
    console.log("Nobody wins because their scores are less than 100");
}
*/

// console.log(addNums(3, 4));

/*
function multiplyByTwo(n, callback) {
    var result = n ** 2;
    callback(result);
  }

function logResult(result) {
    console.log(result);
}

multiplyByTwo(5, logResult); // logs 25
*/

/*
const person = {
    firstName: "Martin",
    lastName: "Luther",
    age: 30,
};

  for (const key in person) {
    //console.log(key);   // Prints the property names: "firstName", "lastName", "age"
    console.log(`${key}: ${person[key]}`); // Prints the corresponding values: "John", "Doe", 30
  }
*/

/*
const userMap = new Map([
    ["name", "John"],
    ["age", 30],
]);

for (const [key, value] of userMap) {
    console.log(`${key}: ${value}`);
  }

*/
