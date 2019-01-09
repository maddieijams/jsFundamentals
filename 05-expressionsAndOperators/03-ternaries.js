//Ternaries

let x = 6

if (x > 0) {
console.log('yes')
} else {
console.log('no')
}

//condition    //true             //false
(x > 0) ? console.log('yes') : console.log('no')

let age = 30;
let young = 'Sorry, you\'r too young to do anything';
let vote = 'Yay! You can vote!';
let drink = 'Yay! You can drink!';
let rent = 'Yay! You can rent a car!';

(age >= 25) ? console.log(rent, drink, vote) : (age >= 21) ? console.log (drink, vote) : (age >= 18) ? console.log (vote) : console.log(young)

//ternaries need a safety net (default)
// In ternary.js, re-write challenge #3 from the previous module using ternary operators.

// "FizzBuzz" is a classic scripting challenge for many languages. 

// Several previous students have even been asked to solve this problem in technical interviews. 

// Write a program using conditional statements to print the following using the numbers 1-100:

// If a number is divisible by 3, print Fizz to the console. If a number is divisible by 5, print Buzz to the console. If a number is divisible by 3 AND 5, print FizzBuzz to the console. Otherwise, print the number to the console.