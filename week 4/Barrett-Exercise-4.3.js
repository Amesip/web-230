var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program


// function
function getArray(arr) {
    var x=0;
    while (x<arr.length){
        console.log(arr[x]);
        x++
    }
}

function getValue(arr, val) {
    var x=0;
    while (x<arr.length){
        if (val==arr[x]){
            console.log(arr[x]);
        }
        x++
    }
}


// Output

console.log(header.display('Mary', 'Barrett', 'Assignment 4.3'));

console.log(" ");

console.log("--DISPLAYING ARRAY ITEMS--");

var vehicles = ["car", "truck", "motorcycle", "airplane", "bus"];

getArray(vehicles);

console.log(" ");

console.log("--SELECTED VALUE--");

getValue(vehicles, "motorcycle");

getValue(vehicles, "bus");

getValue(vehicles, "train");


// end program