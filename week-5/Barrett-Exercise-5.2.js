var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program

//Create a one dimensional array with 5 elements of your favorite food types

var foods = ["Brownies", "Cake", "Ice-Cream", "Candy", "Pie"];

//Using the forEach() method, iterate over the array and output the results 

foods.forEach(function(food) {
    console.log(food);
})

//end program

