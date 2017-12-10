var header = require('Barrett-header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function(s) go here...
function fullName(FirstName, LastName) {
    return FirstName + LastName;
}

function dateWriter(year, month, day) {
    return day + month + year;
}

function formatNumber(Number, FixedPosition) {
    return Number + FixedPosition;

}

function convertToInt(String) {
    return parseInt;
}

function convertToFloat(String) {
    return parseFloat;
}

// output 
console.log('fullName'); 
console.log('dateWriter'); 
console.log('formatNumber'); 
console.log('convertToInt'); 
console.log('convertToFloat'); 




// end program 