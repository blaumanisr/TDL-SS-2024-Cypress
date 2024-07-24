// --- 1 Variables ----
/* Variable is just something that you define and this something will then hold some value. 
To have a variable, you need to declare a variable. What does it mean? It means that you just write that there is a variable so and so.
Defining variable means that you put a value to this variable
Important! Variable names should be meaningful. If we hold a value for something like tirePressure for a car or roomCount in a house then we will name these variables accordingly because when reading code we will understand what this variable is about
variables can be defined with keyword 'let' */
/*  -- Example:
// let x; // now you have declared a variable called x. what do we see when we try to access this variable?
// var age = 50; // considered old syntax
// const MON = 'Monday'; // widely accepted as a convention to write constant variable names in CAPITAL_LETTERS
*/
// ---- 1.2 Variable Types ----
// 1. Boolean // let isItEmpty = false;
// 2. Number // let weight = 1;
// 3. String // let itemName = 'plank';
// 4. Undefined // console.log(undefinedVariable); // ReferenceError: undefinedVariable is not defined
// 5. Null // Value that doesn't exist in memory

// --- 2 Quotes and string formatting ----
// console.log("Hello world!") - double quote works
// console.log(`Hello world!`) - ticks also work
// console.log('Hello world!') - single quote is preffered

// You can also use qoutes inside the quotes for specific use-cases
// console.log('"Hello world!"')
// console.log("'Hello world!'")

// We can also add variables as string inside our messages and make them dynamic instead of hardcoded
// let name1 = 'Rudolfs';
// console.log("Hi. My name is ", name1);

// What if we want to add the name variable in the middle?
// console.log('Hi. My name is ', name1 , ". nice to meet you!");

// To make our message even cleaner and more readable we can use a thing called template literals.
// console.log(`Hello! I'm ${name3}. How are you?`);

// --- 3 Comparison Operators ---
// == equal to
/* let comparisonNumber = 3;
console.log(comparisonNumber == 3); // Expected: true;
console.log(comparisonNumber == 2); // Expected: false;

Now let's try something like this 
console.log(comparisonNumber1 == "3"); // Expected: true;
Here you can see that JS compares the values as if they were both numbers but what if we want to really know that number 3 is or is not equal to string "3"? 
Then we use comparison for value and type === 
console.log(comparisonNumber1 === "3"); // Expected false; because === checks equal value and equal type

// != not equal
// !== not equal value or not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// ? ternary operator
/* -- Example
const isSunny = true;
const weatherMessage = isSunny ? 'Grab your sunglasses!' : 'Dont forget your umbrella!';
console.log(weatherMessage); // Expected output: "Grab your sunglasses!"
*/

// --- 3.1. Basic math operations (addition, subtraction, multiplication, divison, modal)
/* What if we add two strings? 
x = '3';
y = '2';
console.log(x + y); // Expected output: '32'

What happens if we subtract?
console.log(x - y); // Expected output: 1
Javascript tries to convert the variables x & y to numbers if they are not already numbers

What happens if we multiply?
console.log(x * y); // Expected output: 6

// --- 3.2. Logical operators ---
// 1. ! Logical "NOT" operator
// 2. && Logical "AND" operator
// 3. || Logical "OR" operator
// !Example:
// const x = true;
// console.log(!x);


// --- 3 Comments ---

// --- 4 Conditionals (if statement) ---

// --- 5 Classes, object oriented programming ---
/*
Classes is where we start to learn about object oriented programming. It is where we write our code based on real life objects.
Example would be a car. Car can have a model, fuel capacity, fuel consumption, wheel count, door count etc. 
*/

/*
Imagine that you want to create an object and then another one with the same properties. 
You would have two or three blocks of code where the only difference could be 2-3 lines. 
In programming we want to get rid of such code duplication. 
That is why there are classes where you can define one object type and its parameters. 
Then you would simply call a function which creates your object. Thus saving you many lines and making life easier.

People say that a class serves as a blueprint from which we can make many objects and modify them 
if we want to but they still are based on the same blueprint.
/*


// -- Exercises for advanced ---
// Return a random date of birth for someone between the ages of 30 and 65 in the format MM/DD/YYYY

// File Manager Application
/*
    Develop a simple file manager application that allows users to perform basic file system operations such as:
 creating, reading, updating, and deleting files and directories.
// Take out all odd numbers. 
// Separate numbers from words 
// Order words by length from shortest to longest
// Write a new value in new text file
// Each of these subtasks should be done with functions
The application should also support navigating through the file system and displaying the contents of directories.
*/

/*
const fs = require('fs');
const path = require('path');

function createFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(`Error creating file: ${err}`);
        } else {
            console.log(`File created at: ${filePath}`);
        }
    });
}

function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
        } else {
            console.log(`File contents:\n${data}`);
        }
    });
}

function updateFile(filePath, content) {
    fs.appendFile(filePath, content, (err) => {
        if (err) {
            console.error(`Error updating file: ${err}`);
        } else {
            console.log(`File updated at: ${filePath}`);
        }
    });
}

function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file: ${err}`);
        } else {
            console.log(`File deleted: ${filePath}`);
        }
    });
}

createFile(path.join(__dirname, 'example.txt'), 'Hello, World!');
readFile(path.join(__dirname, 'example.txt'));
updateFile(path.join(__dirname, 'example.txt'), '\nAppended content');
deleteFile(path.join(__dirname, 'example.txt'));
*/
