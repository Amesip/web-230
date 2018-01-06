var header = require('../header.js'); 

// start program

/*
    Expected output:
    Mary Barrett
    Exercise 2.3
    December 9, 2017
    Hello Mary Barrett!
    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...

var myNameMary = "Mary Barrett";

// function 
function myName() {
    return myNameMary;
}

// output 
console.log(header.display('Mary', 'Barrett', 'Assignment 2.3'));
console.log(myName);
console.log('\n'); 

// end program





// end program 