"use strict";
// String array
const activeUsers = [];
activeUsers.push("Tony");
// Array of numbers
const ageList = [45, 56, 13];
ageList[0] = 99;
// Alternate Syntax:
// const bools: Array<boolean> = []
const bools = [];
const coords = [];
coords.push({ x: 23, y: 8 });
// Multi-dimensional string array
const board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
}
