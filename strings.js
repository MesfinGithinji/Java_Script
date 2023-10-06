//escaping quotes in J.S use ( \ backslash)
const myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
const mySr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(mySr);
/**
 * Escape sequences in strings in J.S
 *  \'	single quote
 *  \"	double quote
 *  \\	backslash
 *  \n	newline
 *  \t	tab
 *  \r	carriage return(carriage return means to return to the start of the beginning of the current line without advancing downward)
 *  line feed moves the cursor down to the next line without returning to the beginning of the line.
 *  \b	backspace
 *  \f	form feed move to a new page
 */
const myNewStr = "FirstLine\n\t\\SecondLine\nThirdLine";
/**
 * This will output
 *  FirstLine
 *      \SecondLine
 *  ThirdLine
 */

const myName = "Mesfin";
console.log(`fifth letter in my name is ${myName[4]}`);

/**
 * To find the length of a string you use the .length property
 * Spaces will also be counted
 */
const fullName = "Mesfin Githinji"
const length = fullName.length
console.log(`The length of ${fullName} including spaces is ${length}`);

/**
 * You can use zero based indexing to return the nth character within a string
 *
 * Also you can use .length - 1 to return the last character
 *
 */
console.log(`The last letter in ${fullName} is : ${fullName[fullName.length-1]}`);

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The "+ myAdjective +" scary "+ myNoun +" "+myVerb +" very "+ myAdverb;
console.log(wordBlanks);
