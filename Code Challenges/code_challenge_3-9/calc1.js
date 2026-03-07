// Code Challenge 
// Week 2 
// Andrew S

// Create a function called calculator that takes three parameters: num1, num2 and operator. 
// The operator can be +, -, * or /. 
// The function should return the result of the calculation. If anything other than the four 
// operators is passed in, the function should return an error message.

// assigning variables
let num1
let num2
let operator

// using the operator as the case to determine how num1 and num2 are being 'crunched'
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(num1 + num2)
            break;
        case "-":
            console.log(num1 - num2)
            break;
        case "*":
            console.log(num1 * num2)
            break;
        case "/":
            console.log(num1 / num2)
            break;
        case "%": // go home modal! flag for Error
            console.log("ERROR")
    }
}

calculator(5, 2, '+') // returns 7 
calculator(5, 2, '-') // returns 3 
calculator(5, 2, '*') // returns 10 
calculator(5, 2, '/') // returns 2.5 
calculator(5, 2, '%') // returns an error message