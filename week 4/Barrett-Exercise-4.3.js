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

var vehicles = ["car", "truck", "motorcycle", "airplane", "bus"];

getValue(vehicles, "motorcycle");

getValue(vehicles, "bus");

getValue(vehicles, "train");


// end program