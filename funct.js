'use strict';

function myIntro (firstName, lastName) {
  return `Hello.I am ${firstName} ${lastName}.\nNice to Meet You!!`;
}
const greet = myIntro('Mesfin', 'Githinji');
console.log(greet);

function addTwoNum (x, y) {
  const answer = `\nThe sum of ${x} and ${y} is ${x + y}`;
  return answer;
}
const res = addTwoNum(5, 10);
console.log(res);
