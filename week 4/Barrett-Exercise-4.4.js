var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program


// function

function displayArray(arr){
    var x=0;
    while (x<arr.length){
         console.log(arr[x]);
        x++
    }
}

function getValue(x, val) {
    var myVar = val[x];
    return val.filter(function(x) {
        return x===myVar;
    });
}


// Output

console.log(header.display('Mary', 'Barrett', 'Assignment 4.4'));

console.log(" ");

console.log("--ORIGINAL ARRAY--");

var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

displayArray(states);

states.sort();

console.log(" ");

console.log("--SORTED ARRAY--");

displayArray(states);

console.log(" ");

console.log("--SELECTED VALUE--");

var filteredArray = getValue(2, states);

displayArray(filteredArray);


// end program