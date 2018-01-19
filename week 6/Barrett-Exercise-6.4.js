var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

console.log(header.display('Mary', 'Barrett', 'Assignment 6.4'));
console.log(" ");

//Create an object literal ticket with a nested object literal person
//ticket fields:
var ticket = {
    id: "1234",
    name: "Front Row A",
    dateCreated: "January 6, 2018",
    priority: "High",
    personID: "abc123",

//person fields:

    person: {
        id: "P543",
        firstName: "Mary",
        lastName: "Barrett",
        jobTitle: "Libarian"
    }
};

console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + 
" and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").")


// end program