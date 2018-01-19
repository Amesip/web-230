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

var arg1 = 2; //Create a test variableand assign it some numerical value between 1 and 10

function match(arg1, arg2) { //Use the match function, to determine if the test variable matches the generated number
    if (arg1 == arg2){
        return true;
    } 
    else {
        return false;
    }
}

//Use the logMatch and logMismatch functions to output the results

function logMismatch(arg1, arg2) {
    console.log(arg1 + ' and ' + arg2 + ' do not match!');
} 

function logMatch(arg1, arg2) {
    console.log(arg1 + ' and ' + arg2 + ' do match!');
}
//Create a for loop to generate and test 10 random numbers

console.log("--Displaying for loop --")
for (i=0; i<=10; i++) {
    var rand = randomNumber()
    if (arg1 == rand){
        logMatch(arg1, rand)
    }
    else
    {
        logMismatch(arg1, rand)
    }
}
//Create a while loop to generate and test 10 random numbers
console.log("--Displaying while loop --")
i=0
while (i<10) {
    var rand = randomNumber()
    if (arg1 == rand){
        logMatch(arg1, rand)
    }
    else
    {
        logMismatch(arg1, rand)
    }
    i++
}

//Use the provided helper function, randomNumber, to generate a new random number between 1 and 10
// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}

// end program