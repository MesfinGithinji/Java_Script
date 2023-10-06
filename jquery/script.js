console.log("Hello World!");

/**
 * Jquery has 3 main syntax parts
 * 1. The dollar sign is to access jquery
 * 2. The selector eg ("p") this selects for us the HTML elements we wish to      manipulate
 * 3. The .action() which performs the manipulation act on the HTML element we select
 *  The code below selects all paragraph elements for us and hides them
 *
 */
//$("p").hide();

//we can also select html elements based on the class for example
//$(".second").hide();
//this selects all elements with a class name of second

//$("p.second").hide();
//this one selects all paragraph elements with a class name of second

//to select based on id we use the # symbol
//$("#third").hide();


//Here we are demonstrating the concept of events
/**
 * An event is the outcome that is gotten when a user performs a certain action.
 * Eg. clicking f to go fullscreen on youtube
 *
 * so in the code below we are selecting the button by ID
 * the event is onClick
 * once the button with the ID we selected is clicked then go ahead and executes our call back function
 * our call back function selects the paragraph using its class and performs a hide action on it.
 */
$("#btn_hide").click(function () {
    $("p.second").hide();
});

$("body").keydown(function (event) {
    if (event.which === 72) {
        console.log(event.which);
        $("p.first").hide();
    } else if (event.which === 86) {
        console.log(event.which);
        $("p.first").show();
    }
});
