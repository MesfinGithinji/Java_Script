function sayHi() {
    return 'Hi';
}

async function display() {
    console.log("I am waiting");
    let result = await sayHi();
    console.log(result);
}

// Call the display function to see the result
display();
