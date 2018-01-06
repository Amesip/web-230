var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program



// function
function getFruit(arr) {
    var x=0;
    while (x<arr.length){
        console.log(arr[x]);
        x++
    }
}


// Output from the getFruit() function

console.log(header.display('Mary', 'Barrett', 'Assignment 4.2'));

console.log(" ");

var fruits = ["banana", "apple", "kiwi", "pineapple", "orange"];

getFruit(fruits);

// end program