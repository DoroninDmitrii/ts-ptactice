"use strict";
// Function parameter type annotations:
const doSomething = (person, age, isFunny) => { };
// Return type annotation:
function greet(person = "stranger") {
    return `Hi there, ${person}!`;
}
function square(num) {
    return num * num;
}
square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);
// Arrow function:
const add = (x, y) => {
    return x + y;
};
// Contextual Type Clues
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
    return color.toUpperCase();
});
// Void
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// Never
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING!");
    }
}
function twoFer(person = 'you') {
    return `One for ${person}, one for me`;
}
const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    return false;
};
console.log(isLeapYear(2000));
