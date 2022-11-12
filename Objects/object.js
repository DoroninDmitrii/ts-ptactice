"use strict";
// Objects as parameters:
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: "Thomas", last: "Jenkins" });
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);
let coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
let coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
const myPoint = { x: 1, y: 3 };
const user = {
    id: 12837,
    username: "catgurl",
};
console.log(user.id);
user.id;
const happyFace = {
    radius: 4,
    color: "yellow",
};
const christy = {
    numLives: 7,
    breed: "Husky",
    age: 9,
};
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
function getProfit(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
function getProfit(movie) {
    const { grossWorldwide, budget } = movie.boxOffice;
    return grossWorldwide - budget;
}
function getProfit({ boxOffice: { grossWorldwide, budget } }) {
    return grossWorldwide - budget;
}
