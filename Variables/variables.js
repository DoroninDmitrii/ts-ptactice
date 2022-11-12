"use strict";
// String Variable With Explicit Annotation
let movieTitle = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; //This results in an error!
movieTitle.toUpperCase();
// Number Variable with explicit annotation
let numCatLives = 9;
numCatLives += 1;
numCatLives = "zero";
// Explicitly typed boolean variable:
let gameOver = false;
gameOver = true;
gameOver = "true";
// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;
let isFunny = false;
isFunny = true;
isFunny = "asd";
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie;
for (let i = 0; i < movies.length; i++) {
    if (movies[i] === 'Amadeus') {
        foundMovie = 'Amadeus';
    }
}
