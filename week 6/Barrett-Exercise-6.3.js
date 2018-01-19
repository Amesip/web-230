var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program

console.log(header.display('Mary', 'Barrett', 'Assignment 6.3'));
console.log(" ");

//Create an object literal for a ticketing system with three fields and default values
var ticket = {
    id: "123",
    name: "Front Row A",
    requester: "Mary"
};

//Display each of the fields in one concatenated string
console.log("{id: " + ticket.id + ", name: " + ticket.name + ", requester: " + ticket.requester + "}")



// end program