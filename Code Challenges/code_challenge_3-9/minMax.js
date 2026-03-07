// Code Challenge 
// Week 2 
// Andrew S

//Create an arrow function called minMax() that takes in an array of numbers and returns an object with the 
// minimum and maximum numbers in the array.

// creating the function minMax where the numbers 
let minMax = (numbers) => {
    // pulling the smallest & largest values from the numbers array
    // and assigning variables accordingly as min and max 
    let min = Math.min(...numbers)
    let max = Math.max(...numbers)
    // returning smallest and largest value only
    return { min: min, max: max }
}
// the numbers array we are pulling from
console.log(minMax([1, 2, 3, 4, 5])); // { min: 1, max: 5 }