var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program

//Create an Array-Like Object of 5 famous composers

var composers = [
    {
        firstName: "Ludwig van",
        lastName: "Beethoven",
        genre: "Romantic",
        rating: 8

    },
    {
        firstName: "Wolfgang Amadeus",
        lastName: "Mozart",
        genre: "Classical",
        rating: 10

    },
    {
        firstName: "Johann Sebastian",
        lastName: "Bach",
        genre: "Baroque",
        rating: 9

    },  
    {
        firstName: "Joseph",
        lastName: "Haydn",
        genre: "Classical",
        rating: 6

    },  
    {
        firstName: "Franz",
        lastName: "Schubert",
        genre: "Romantic",
        rating: 5

    }
];

//Iterate over the Array-Like Object using the built-in forEach() method and output the results
console.log(" ");
console.log("-- COMPOSERS --");
composers.forEach(function(composer) {
    console.log(
        "Last Name: " +composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
    );
})




// end program