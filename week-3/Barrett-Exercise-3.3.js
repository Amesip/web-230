var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)

console.log(header.display('Mary', 'Barrett', 'Assignment 3.3'));

var eventKeyCode = 16;

switch(eventKeyCode) {
    case 13:               //Start here if eventKeyCode === 13
    console.log("The enter key was pressed");
    break;

    case 16:               //Start here if eventKeyCode === 16
    console.log("The shift key was pressed");
    break;

    case 32:               //Start here if eventKeyCode === 32
    console.log("The spacebar key was pressed")
    break;

    case 8:                //Start here if eventKeyCode === 8
    console.log("The backspace / delete key was pressed");
    break;

    default:               //If all else fails...
    console.log("Unrecognized key press"); 
    break;
}
// end program 