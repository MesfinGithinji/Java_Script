// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins1 = calcAverage(44, 23, 71);
// console.log(`Dolphins avg score is ${avgDolphins1} points`);
// const avgKoalas1 = calcAverage(65, 54, 49);
// console.log(`Koalas avg score is ${avgKoalas1} points`);

// function checkWinner (avgDolphins1, avgKoalas1) {
//   if (avgDolphins1 >= avgKoalas1 * 2) {
//     console.log(`Dolphins have an avg score of ${avgDolphins1} points \nThey win!!`);
//   } else if (avgKoalas1 >= avgDolphins1 * 2) {
//     console.log(`Koalas have an avg score of ${avgKoalas1} points \nThey win!!`);
//   } else {
//     console.log('No winner for now , score is not double');
//   }
// }
// const res1 = checkWinner(avgDolphins1, avgKoalas1);
// console.log(res1);

// console.log('\n');

// const avgDolphins2 = calcAverage(85, 54, 41);
// console.log(`Dolphins avg score is ${avgDolphins2} points`);
// const avgKoalas2 = calcAverage(23, 34, 27);
// console.log(`Koalas avg score is ${avgKoalas2} points`);

// function checkWinner2 (avgDolphins2, avgKoalas2) {
//   if (avgDolphins2 >= avgKoalas2 * 2) {
//     console.log(`Dolphins have an avg score of ${avgDolphins2} points \nThey win!!`);
//   } else if (avgKoalas2 >= avgDolphins2 * 2) {
//     console.log(`Koalas have an avg score of ${avgKoalas2} points \nThey win!!`);
//   } else {
//     console.log('No winner for now,score is not double');
//   }
// }
// const res2 = checkWinner2(avgDolphins2, avgKoalas2);
// console.log(res2);

// const compare = function (a, b) {
//   return a - b;
// }

function createPhoneNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  }
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"
