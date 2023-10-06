/**
 * Arrays are a common data structure in J.S
 *
 * To access elements in an Array you use the index position
 * To assign a new value at a given position, you use the index position
 */
const myArr = [1, 2, 3, 4, 5, 6, 7];
console.log(`Length is ${myArr.length}`);
/**
 * To add data to the end of an array you use the .push() method
 * this method also returns the length of the new array
 */
const newLength = myArr.push(9);
console.log(myArr);
console.log(`New Length after push is ${newLength}`);
/**
 * To add data to a particular position use the index
 */
myArr[3] = 10;
console.log(myArr);

/**
 * To remove data from the end of the array, use the .pop() method
 * pop also returns what was removed
 */
const poppedValue = myArr.pop()
console.log(poppedValue);
console.log(myArr);

/**
 * To remove a value from a specific index within an array, you use the splice method
 * provide the index as an argument ans the number of values to be removed
 */
const valueRemoved = myArr.splice(4,1);
const msg = `The value removed at index 4 is ${valueRemoved}`;
console.log(msg);
console.log(`Array after splice:`, myArr);

/**
 * You can also use the shift method to remove data from the array
 * shift removes the first element in an array
 */
const firstElement = myArr.shift();
console.log(firstElement);

/**
 * shift()removes elements to the beginning of the array
 *  remember shift off of
 * unshift() adds elements from the beginning of the array
 */
myArr.unshift(5);
console.log(myArr);
