// FizzBuzz
// CTEC 
// Andrew

// Print/log the numbers from 1 to 100
// For multiples of three print "Fizz" instead of the number
// For multiples of five print "Buzz"
// For numbers that are multiples of both three and five print "FizzBuzz".

let i // bring 'i' into the global
let fizz = i * 3;
let buzz = i * 5;

// using a control structure or 'for' loop.
// i starting at 1, ending at 100, increase by 1
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        // If both * 3 and 5; 15, 30, 45, 60, 75, 90, etc..
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        // If * of 3; think 3, 6, 9, 12, 15, 18, etc..
        console.log("Fizz");
    } else if (i % 5 == 0) {
        // If * of 5; think 5, 10, 15, 20, 25, 30, etc..
        console.log("Buzz");
    } else {
        // if neither is met print number
        console.log(i)
    }
}

// There are many ways to write the FizzBuzz program! The version you wrote is a common and clear approach. 
// Other variations might involve using different control structures, like a switch statement, or using different 
// logic to determine when to print "Fizz", "Buzz", or "FizzBuzz". The important thing is that the program correctly 
// implements the FizzBuzz rules.