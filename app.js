/*
Q & A
1. How do we assign a value to a variable?
initialize a variable with let/const/var and use assignment operator "=" to assign a value to it
ex: let varName = 0
2. How do we change the value of a variable?
after initializing the variable, use assignment operator '=' with a new value
ex: varName = 5
3. How do we assign an existing variable to a new variable?
use assignment operator '=' to give a new value
ex: let newVar = varName
4. Remind me, what are declare, assign, and define?
declare initialize a variable, assign (=) gives the variable a value, define is to create a function
5. What is pseudocoding and why should you do it?
Pseudocoding is like a flowchart planning of how the code will work
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
5 mins ish?
*/

/*
Strings
1. Create a variable called firstVariable:
let firstVariable;
2. Assign it the value of the string "Hello World"
firstVariable = "Hello World";
3. Change the value of this variable to some number
firstValue = 5;
4. Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable
5. Change the value of secondVariable to any string.
secondVariable = "any string";
6. What is the value of firstVariable?
firstVariable contains an integer: 5
7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
let yourName = "Hu"
let newVar = `Hello, my name is ${yourName}`;
*/

/*
Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
*/
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 === parseInt('48'));

let animal = "cow";
if(animal === "cow"){
    console.log("mooooo")
}
else(console.log("Hey! You're not a cow."))
