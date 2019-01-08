/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off


var y = false;
(1)
1-Keyword for boolean - no quotation marks
*/
var x = true;
let on = true;
console.log(on);

/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

let undef = undefined; //do not do this
console.log(undef);

let grass;
console.log(grass);

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/

var myAge = 27;
console.log(myAge);

/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne + ', ' + stringTwo);//string concatenation

//Numbers vs Strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne ,  stringTwo);// String concatenation
let combined = stringOne + ", " + stringTwo;
console.log(stringOne, ",", stringTwo);


