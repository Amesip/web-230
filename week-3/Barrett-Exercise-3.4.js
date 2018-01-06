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
console.log(header.display('Mary', 'Barrett', 'Assignment 3.4'));

console.log(" ");

var arg1 = 2;

function match(arg1, arg2) {
    if (arg1 == arg2){
        return true;
    } 
    else {
        return false;
    }
}

console.log("--DISPLAYING FOR LOOP--");

function logMismatch(arg1, arg2) {
    console.log(arg1 + ' and ' + arg2 + ' do not match!');
} 

function logMatch(arg1, arg2) {
    console.log(arg1 + ' and ' + arg2 + ' do match!');
}


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}

// end program