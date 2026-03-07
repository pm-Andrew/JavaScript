// Coding Challenge No. 0 - 2

// Challenge 0 - Capitalize
const myString = 'developer'; // [9]

// a 
// Indexing and isolating [0] 'd', then add as substring ('eveloper'). 
let myNewString1 = myString.charAt(0).toUpperCase() + myString.substring(1, 9)

// b
// taking the myString slicing out index[0] (d) and Uppercase it, then add as substring ('eveloper') 
let myNewString2 = myString.slice(0, 0) + myString[0].toUpperCase() + myString.substring(1, 9);

// c
// declaring a new variable, replacing the lower case 'd' w/ 'D'
let myNewString3 = myString.replace('d', 'D')

// Expected
console.log(myNewString1); // 'Developer'
console.log(myNewString2); // 'Developer'
console.log(myNewString3); // 'Developer'

// Challenge 1 - Numbers
// generating integers between 1- 100
const x = Math.floor(Math.random() * 101);
const y = Math.floor(Math.random() * 101);

// setting variables 
let sumOutput = x + y;
let differenceOutput = x - y;
let productOutput = x * y;
let quotientOutput = x / y;
let rmOutput = x % y;


console.log(`${x} + ${y} = ${sumOutput}`); // 31 + 15 = 46
console.log(`${x} - ${y} = ${differenceOutput}`); // 31 - 15 = 16
console.log(`${x} * ${y} = ${productOutput}`); // 31 * 15 = 465
console.log(`${x} / ${y} = ${quotientOutput}`); // 31 / 15 = 2.066666666666667
console.log(`${x} % ${y} = ${rmOutput}`); // 31 % 15 = 1

// // Challenge 2 - Array Methods

// // Challenge 2-1
// array of a range 1-5
const arr = [1, 2, 3, 4, 5];

// Reversing the arrays order
arr.reverse()

// using push() to add 0 to the end
let start = arr.push(0)

// using unshift to add 6 to the beginning 
let end = arr.unshift(6)

console.log(arr); // [6, 5, 4, 3, 2, 1, 0];

// // Challenge 2-2
// //
const arr1 = [1, 2, 3, 4, 5];

const arr2 = [5, 6, 7, 8, 9, 10];

let arr3 = arr1.slice(0, 4).concat(arr2)

console.log(arr3); // [1,2,3,4,5,6,7,8,9,10]


// Challenge 3 - Objects
// library as an array with books as objects holding data about books and status of book
const library = [
    {
        title: "Slow Productivity",
        author: "Cal Newport",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Kitchen Confidential",
        author: "Anthony Bourdain",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Mastery",
        author: "Robert Greene",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];

// Changing read status to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// renaming variable of first book to firstBook
const { title: firstBook } = library[0]

// creating a JSON data structure
const str = JSON.stringify(library)

// logging out JSON string & firstBook
console.log(str)
console.log(firstBook)
