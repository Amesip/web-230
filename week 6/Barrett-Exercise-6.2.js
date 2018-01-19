var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program …

 */

// start program

console.log(header.display('Mary', 'Barrett', 'Assignment 6.2'));
console.log(" ");


try {//Using a try/catch/finally block, catch and display the error
    x=5
    if(x ==5) {
        throw "But I wanted x to be 10!"; //Throw an error of your choosing
    }
    else {
        console.log("Happy day!")}
    } catch (err) {
console.log("\r\n" + err)
} finally {
console.log("\r\nCould not proceed, terminating...")
}

console.log("It continued!!")

// end program