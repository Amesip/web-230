var header = require('../header.js');

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program

console.log(header.display('Mary', 'Barrett', 'Assignment 5.4'));

//Reuse the Array-Like Object collection created in Exercise 5.3 (famousComposers)

var famousComposers = [
    {
        firstName: "Ludwig van",
        lastName: "Beethoven",
        genre: "Classical",
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
        genre: "Classical",
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
        genre: "Classical",
        rating: 5

    }
];

//Using the map() method, create a filtered list of composers by rating

var music = famousComposers.map(function(singleComposer){
    return "Rating: " + singleComposer.rating + "\r\n Composer: " + singleComposer.lastName;
})
console.log("-- COMPOSER BY RATING --");
music.forEach(function(element) {
console.log(element)
})

//Using the map() method, create a filtered list of composers by genre

var musicTwo = famousComposers.map(function(singleComposer){
    return "Genre: " + singleComposer.genre + "\r\n Composer: " + singleComposer.lastName;
})

//Iterate over the filtered collections using the forEach() method and output the results

console.log(" ");
console.log("-- COMPOSER BY GENRE --");
musicTwo.forEach(function(element) {
    console.log(element)
    })



// end program