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
if (animal === "cow") {
    console.log("mooooo")
}
else (console.log("Hey! You're not a cow."))

/*
Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/
let age = 18;
if (age >= 16) {
    console.log("Here are the keys")
}
else if (age < 16) {
    console.log("Sorry, you're too young")
}

/*
Loops: The basics
1. Write a loop that will print out all the numbers from 0 to 10, inclusive
2. Write a loop that will print out all the numbers from 10 up to and including 400
3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
*/
//console.log() are commented out to avoid printing all the numbers...
for (i = 0; i < 11; i++) {
    //console.log(i)
}
for (i = 10; i <= 400; i++) {
    //console.log(i)
}
for (i = 12; i < 4000; i += 3) {
    //console.log(i)
}

/*
Get even
1. Print out the numbers that are within the range of 1 - 100
2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/
for (i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is an even number`)
    }
}

/*
Give me Five
1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
3. For numbers divisible by both three and five, be sure your code prints both messages
*/
for (i = 1; i < 101; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(`I found a ${i}. High five!`)
        console.log(`I found a ${i}. Three is a crowd`)
    }
    else if (i % 5 === 0) {
        console.log(`I found a ${i}. High five! `)
    }
    else if (i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd`)
    }
}

/*
Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.
*/
let newNum = 0;
for (i = 1; i <= 10; i++) {
    newNum += i;
}
console.log(newNum);
/*You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
*/

let doublePay = 0
for (i = 1; i < 101; i++) {
    doublePay += i * 2;
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
const quotes = ["firstQuote", "secondQuote", "thirdQuote"];

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
ourClass[4] = "Octocat"
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass)

//Mix it up
const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
// Remove the 5 from the beginning of the array.
myArray.shift(5);
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
// Remove the string of your choice from the end of the array.
myArray.pop();
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
//returned Object(0)[]
console.log(Array.prototype.reverse(myArray));
console.log(myArray.reverse());
//myArray.reverse() returned the array in reverse order

//Biggie Smalls
// Create a variable that contains an integer.
let num = 5;
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
if (num < 100) {
    console.log("little number")
}
else if (num > 100) {
    console.log("big number")
}

//Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

let monkeyNum = 90;
if (monkeyNum < 5) {
    console.log("little number")
}
else if (monkeyNum > 10) {
    console.log("big number")
}
else {
    console.log("monkey")
}

//What's in your closet
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];
//1.  What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
//arr.splice(start,remove,'addItem')
kristynsCloset.splice(6,0,"raybans")
console.log(kristynsCloset)
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(5,1,"stained knit hat")
console.log(kristynsCloset)
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0])
// 5. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0])
// 6. Access one item from Thom's accessories array.
console.log(thomsCloset[2][0])
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`)
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1].splice(2,1,"Footie Pajamas")
console.log(thomsCloset[1])

//print Greeting
// Do you think you could write a function called printGreeting with a parameter namethat returns a greeting with the argument interpolated into the greeting?
const greetings = (sli)=>{
    console.log(`Hello there, ${sli}`)
}
greetings("Slimer")

const printCool = (name) =>{
    console.log(`${name} is cool`)
}
printCool("Captain")

//calculate cube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
const caluclateCube = (num) =>{
    console.log(num**3)
}
caluclateCube(5);

//isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
let str = "a"
let isVow = false
switch (str.toLowerCase()) {
    case 'o':
        isVow = true;
    case 'e':
        isVow = true;
    case 'i':
        isVow = true;
    case 'u':
        isVow = true;
    case 'a':
        isVow = true;
}
console.log(isVow)

//getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths=(str1,str2)=>{
    let arr = []
    arr.push(str1.length)
    arr.push(str2.length)
    console.log(arr)
}
getTwoLengths("candy","egg")

//getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths= (arr) =>{
    let lengthArr = []
    arr.forEach(item=>{
        lengthArr.push(item.length)
    })
    console.log(lengthArr)
}
let mulArr = ["coastal","pepsisi","cat"]
getMultipleLengths(mulArr)

//max of three
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations
const maxOfThree =(num1,num2,num3)=>{
    let lrgNum = num1
    if(num2>num1){
        lrgNum = num2;
    }
    else if(num3>num1){
        lrgNum = num3;
    }
    console.log(lrgNum);
}
maxOfThree(1,4,1)

//printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord =(arr)=>{
    let longestStr = ""
    arr.forEach(item =>{
        if(item.length>longestStr.length){
            longestStr= item;
        }
    })
    console.log(longestStr)
}
printLongestWord(["cady","canny","dogg"])

// Make a user object
// Create an object called user.
const user = {
    name:"userName",
    email: "user@somemail.abc",
    age: 45,
    purchased:[]
}
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email = "user@newmail.abc"
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++
console.log(user.age)
user.location="NYC"
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user.purchased[2])

// Object-within-object
// Write a friend object into your userobject and give the friend a name, age, location, and purchased array (empty for now)
const friend = {
    name:"Josh",
    age:40,
    location:"NYC",
    purchased:[]
}
// Console.log just the friend's name
console.log(friend.name)
// Console.log just the friend's location
console.log(friend.location)
// CHANGE the friend's age to 55
friend.age=55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
friend.purchased.push("The One Ring")
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
friend.purchased.push("A latte")
// Console.log just "A latte" from the friend's purchasedarray.
console.log(friend.purchased[1])

//Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
user.purchased.forEach(i=>console.log(i))
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
friend.purchased.forEach(i=>console.log(i))
//Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
const updateUser = ()=>{
    user.age++
    user.name=user.name.toUpperCase()
}
// updateUser()
// console.log(user)
// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with user as the argument.
const oldAndLoud=(person)=>{
    person.age++
    person.name=person.name.toUpperCase()
    // console.log(person.age)
}
oldAndLoud(user);

//Cat Combinator
// 1. Mama cat
// Define an object called cat1that contains the following properties:
// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed
const cat1 ={
    name:"Ryu'sMom",
    breed:"Domestic Long Hair",
    age:6
}
console.log(cat1.age)
console.log(cat1.breed)

// 2. Papa cat
// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)
const cat2={
    name:"Ryu'sDad",
    breed:"Maine Coon",
    age:8
}

// 3. Combine Cats!
// The cats are multiplying!
// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
const combineCats=(mama,papa)=>{
//     // console.log(`The mama and papa are ${mama.name} and ${papa.name}.`);
    let newCat={
        name: `${mama.name}${papa.name}`,
        age:1,
        breed:`${mama.breed}-${papa.breed}`
    }
    return newCat;
}
/*  cat1    cat2  ||  cat3    cat4
        \  /              \  /
       child1     +      child2
            \           /
                babi
*/
console.log(combineCats(
    combineCats(
        combineCats(cat1, cat2), combineCats(cat1, cat2)
    ),
    combineCats(
        combineCats(cat1, cat2), combineCats(cat1, cat2)
    )
    )
);
