var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// test variable
var x=2;


// for loop
for (var x=2; x<10; x++){
console.log("-- Displaying for loop --");
}



// while loop 
while(x<10){
console.log("\n-- Displaying while loop --");
}



// Reused functions from exercise-3.2.js

function match(x) {
    if (x<3, x>1)
    return true;
} else {
    return false;
}

function logMismatch("x=2") {
    if '('(x=2)
    return "x and "" do not match!";
    } 

function logMatch("x=2") {
    if (x=2)
    return "dog and "" do match!"
}






// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}