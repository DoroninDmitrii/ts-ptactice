"use strict";
// Basic Union Type:
let age = 21;
age = 23;
age = "24";
// Union type with type aliases
let coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
// Function parameter union type:
function printAge(age) {
    console.log(`You are ${age} years old`);
}
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
// const nums: number[] = [1,2,3,4]
// const stuff: any[] = [1,2,3,4, true, "asdas", {}]
// const stuff: (number | string)[] = [1,2,3, "das"]
// const stuff: number[] | string[] = ["asd", "asd", 1]
// Union Type With Arrays
const coords = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });
// Literal Types
let zero = 0;
let mood = "Happy";
mood = "Sad";
let today = "Sunday";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore;
highScore = 1;
highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff = [];
// Create an array called colors that can hold a mixture of RGB and HSL color types
let color = [{ r: 1, g: 2, b: 3 }, { h: 1, s: 222, l: 34 }];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (person) => {
    if (typeof person === 'string') {
        console.log(`Hello, ${person}`);
    }
    else {
        for (let pes of person) {
            console.log(`Hello, ${pes}`);
        }
    }
};
