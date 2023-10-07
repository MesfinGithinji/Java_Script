/*
function createPhoneNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

    }
  }

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"

  this code although does the job, it does not look very efficient.
  The best way to do it is to slice up the array , then join the slices to look like the output of a phone number
*/

const createPhoneNumber = numbers => {
    const part1 = numbers.slice(0, 3).join('');
    const part2 = numbers.slice(3, 6).join('');
    const part3 = numbers.slice(6).join('');
    return `(${part1}) ${part2}-${part3}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//you could use regex as well
// function createPhoneNumber(numbers) {
//     return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// }
