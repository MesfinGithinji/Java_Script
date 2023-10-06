/**
    if (condition is true) {
    statement is executed
    }

    boolean conditions are evaluated in the parenthesis
    if they evaluate to true then the statement is executed

 */
function trueOrFalse(wasThatTrue) {

    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(false));
