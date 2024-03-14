/*** DOM BASICS ***/

/*
    Here are a couple basic exercises on the same page to give you a little practice before proceeding to the A5 prep exercises.
*/

// Event listener for page load
window.addEventListener("load", function() {
    console.log('Page loaded.');
    init();
});

// DOM code for page elements
function init() {

    /*** STEP 1: CHANGE THE BORDER COLOR ***/

    // TODO: Declare objects to gain access to element properties.
    const box = document.getElementById("box");

    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const blue = document.getElementById("blue");


    // TODO: Create listeners to change color of border to same hex values as buttons.
    // Note: DOM can't access style sheets, so just hard-code the hex codes here for now.

    red.addEventListener("click", function() {
        box.style.borderColor = "#a7240d";
    });
    
    yellow.addEventListener("click", function() {
        box.style.borderColor = "#ddac0a";
    });
    
    blue.addEventListener("click", function() {
        box.style.borderColor = "#0d64b6";
    });

    /*** STEP 2: CHANGE THE BORDER THICKNESS ***/

    // TODO: Declare objects to gain access to element properties.

    const four = document.getElementById("4");
    const eight = document.getElementById("8");
    const twelve = document.getElementById("12");

    // TODO: Create listeners to change thickness of box border.

    four.addEventListener("click", function() {
        box.style.borderWidth = 4 + "px";
    });
    
    eight.addEventListener("click", function() {
        box.style.borderWidth = 8 + "px";
    });
    
    twelve.addEventListener("click", function() {
        box.style.borderWidth = 12 + "px";
    });


    /*** STEP 3: CHANGE THE BORDER STYLE ***/

    // TODO: Declare objects to gain access to element properties.
    const dotted = document.getElementById("dotted");
    const double = document.getElementById("double");
    const dashed = document.getElementById("dashed");

    // TODO: Create listeners to change style of box border.
    document.addEventListener("click", function(event) {
        if (event.target.id === "dotted") {
            box.style.borderStyle = "dotted";
        }
        if (event.target.id === "double") {
            box.style.borderStyle = "double";
        }
        if (event.target.id === "dashed") {
            box.style.borderStyle = "dashed";
        }
    });

}