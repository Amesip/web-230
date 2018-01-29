var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program

console.log(header.display('Mary', 'Barrett', 'Assignment 7.2'));

console.log(" ");

//Create an employee constructor object with four parameters / fields

function Employee (number, id, firstName, lastName, title) {

this.number = number;

this.id = id; 

this.firstName = firstName;

this.lastName = lastName

this.title = title

}

//Populate an array with five (5) employee objects

var employees = [

new Employee("1", "1234", "Bob", "Jones", "Manager"),
new Employee("2", "5678", "Jane", "Doe", "Sales Representative"),
new Employee("3", "9101", "Sally", "Kennard", "Cashier",),
new Employee("4", "7520", "Jessica", "North", "Tech Support"),
new Employee("5", "8795", "Ian", "Pruitt", "Administrative Assistant"),

];

// Iterate over the array and output the results.

var arrayLength = employees.length

for (var i=0; i<arrayLength; i++)
{
console.log(employees[i].number + " " + employees[i].id + " " + employees[i].firstName + " " + employees[i].lastName + " " + employees[i].title)
}


// end program