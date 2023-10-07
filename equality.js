/**
 * Comparison operators in J.S return a boolean value
 * Either true or false.
 *
 * Equality operators in J.S return true if both operands are equal otherwise return's false
 * We have loose equality ==
 * And strict equality ===
 */
/**
 * loose equality == does type coercion in the background
 * strict equality === checks for datatype equality as well
 */
function checkEquality(num1, num2) {
    if (num1 == num2) {
        console.log("They are equal");
    } else {
        console.log("Not equal");
    }
}
checkEquality(3, '3');
