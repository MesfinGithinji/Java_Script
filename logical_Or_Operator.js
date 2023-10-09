/**
 * The logical OR operator || returns true if either of the operands is true. Otherwise, it returns false.
 */
/**
 * one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
 */
function testLogicalOr(val) {
    // Only change code below this line
    if (val < 10 || val > 20) {
        return "Outside";
    }
    // Only change code above this line
    return "Inside";
}
testLogicalOr(15);
