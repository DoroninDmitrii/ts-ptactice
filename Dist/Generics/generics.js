"use strict";
function identity(arg) {
    return arg;
}
console.log(identity(5));
function randomElement(arg) {
    const randIndex = Math.floor(Math.random() * arg.length);
    return arg[randIndex];
}
randomElement([1, 2, 3, 4]);
console.log(randomElement([1, 2, 3, 4]));
