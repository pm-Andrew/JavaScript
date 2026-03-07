// Code Challenge 
// Week 2 
// Andrew S

//Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument 
// and returns the temperature in Celsius.

// CC 1 
// PT 1
// // F is the parameter 
// function getCelsius(F) {
//     return (F - 32) * 5 / 9 // getting the parameter from console and plugging in Celsius Formula

// } // sends results of formula to console


// // PT 2
// converted to arrow function
const getCelsius = (F) => {
    return (F - 32) * 5 / 9 // getting the parameter from console and plugging in Celsius Formula
} // sends results of formula to console

console.log(`The temperature is ${getCelsius(32)} \xB0C`); // The temperature is 0 °C