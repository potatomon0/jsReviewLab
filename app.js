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

//The farm
let animal = "cow";
if(animal === "cow"){
    console.log("mooooo")
}
else(console.log("Hey! You're not a cow."))

/*
Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/
let age = 18;
if(age >= 16){
    console.log("Here are the keys")
}
else if(age<16){
    console.log("Sorry, you're too young")
}

/*
Loops: The basics
1. Write a loop that will print out all the numbers from 0 to 10, inclusive
2. Write a loop that will print out all the numbers from 10 up to and including 400
3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
*/
//console.log() are commented out to avoid printing all the numbers...
for(i=0;i<11;i++){
    //console.log(i)
}
for(i=10;i<=400;i++){
    //console.log(i)
}
for(i=12;i<4000;i+=3){
    //console.log(i)
}

/*
Get even
1. Print out the numbers that are within the range of 1 - 100
2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/
for(i=1;i<100;i++){
    if(i%2===0){
        console.log(`${i} is an even number`)
    }
}

/*
Give me Five
1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
3. For numbers divisible by both three and five, be sure your code prints both messages
*/
for(i=1;i<101;i++){
    if(i%5===0 && i%3===0){
        console.log(`I found a ${i}. High five!`)
        console.log(`I found a ${i}. Three is a crowd`)
    }
    else if(i%5===0){
        console.log(`I found a ${i}. High five! `)
    }
    else if(i%3===0){
        console.log(`I found a ${i}. Three is a crowd`)
    }
}

/*
Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.
*/
let newNum = 0;
for(i=1;i<=10;i++){
    newNum+=i;
}
console.log(newNum);
/*You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
*/    

let doublePay=0
for(i=1;i<101;i++){
    doublePay +=i*2;
}
console.log(doublePay);

/*
Arrays & Control flow
1. What are the things in an array called?
An array can hold variables of int, str, bool, etc
2. Do Arrays guarantee those things will be in order?
Yes, arrays use index (from 0 to ...) to hold it's variables in a ordered list
3. What real-life thing could you model with an array?
For example, if there is a line in checkout, the customers are sequenced in who came first. Their number in line can be indexed in an array
*/

//Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["firstQuote","secondQuote","thirdQuote"];

//Accessing elements
let randomThings = [1, 10, "Hello", true];
// How do you access the 1st element in the array?
randomThings[0];
// Change the value of "Hello"to "World"
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings[2]);

//Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
ourClass[2];
// Change the value of "Github" to "Octocat"
ourClass[4]="Octocat"
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass)

//Mix it up
const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
// Remove the 5 from the beginning of the array.
myArray.pop(myArray)
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
