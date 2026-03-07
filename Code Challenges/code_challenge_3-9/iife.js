// Code Challenge 
// Week 2 
// Andrew S

// Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a 
// rectangle and outputs it to the console in a message as soon as the page loads.

// creating a closed scope 
((length, width) => {

    let a = length * width // Formula for area of Rectangle
    // logging to console via a
    console.log(`Length of 5 and Width of 10 is ${a}`)

})(5, 10) // (length, width)

// On page load The area of a rectangle with a length of 10 and a width of 5 is 50.