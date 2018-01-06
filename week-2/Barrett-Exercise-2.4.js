var header = require('../header.js'); 

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
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

function dateWriter(year, month, day) {
    return new Date(year, month, day);
}

function formatNumber(number, fixedPosition) {
    return number.toFixed(fixedPosition);
}

function convertToInt(stringValue) {
    return parseInt(stringValue);
}

function convertToFloat(stringValue) {
    return parseFloat(stringValue);
}

// output 
console.log(header.display('Mary', 'Barrett', 'Assignment 2.4'));
console.log('Hello! My name is ' + fullName('Mary', 'Barrett') + '!'); 
console.log("Today's date is " + dateWriter(2017, 11, 25) + ' and the current temperature is ' + formatNumber(8, 1) + '.'); 
console.log('I am ' + convertToInt('32') + ' years old and my savings account goal is ' + convertToFloat('100.55') + ' dollars.');




// end program 