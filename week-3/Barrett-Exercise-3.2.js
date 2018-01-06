var header = require('../header.js'); 

// start program

/*
    Expected output:
    FirstName LastName
    Exercise 3.2
    Today's Date
    // output from the match() function 
    false
    true 
    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 
function match(arg1, arg2) {
    if (arg1 == arg2){
        return true;
    } 
    else {
        return false;
    }
}

function logMismatch(arg1, arg2) {
    console.log(arg1 + ' and ' + arg2 + ' do not match!');
} 

function logMatch(arg1, arg2) {
    console.log(arg1 + ' and ' + arg2 + ' do match!');
}

// six (6) test variables 
var dog ="dog";
var cat ="cat";
var fish ="fish";
var goat ="goat";
var lizard ="lizard";
var gerbil ="gerbil";

console.log(header.display('Mary', 'Barrett', 'Assignment 3.2'));

// Output from the match() function... 

console.log(match(dog, dog));
console.log(match(fish, gerbil));
console.log(match(lizard, cat));
console.log(match(goat, goat));

// Conditional "if...else" statements. Include checks for all six (6) test variables 


if (match(dog, dog)) {
    logMatch(dog, dog);
} else {
    logMismatch(dog, dog);
}

if (match(fish, gerbil)) {
    logMatch(fish, gerbil);
} else {
    logMismatch(fish, gerbil);
}

if (match(lizard, cat)) {
    logMatch(lizard, cat);
} else {
    logMismatch(lizard, cat);
}

if (match(goat, goat)) {
    logMatch(goat, goat);
} else {
    logMismatch(goat, goat);
}