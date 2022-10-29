// String Variable With Explicit Annotation
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; //This results in an error!
movieTitle.toUpperCase();

// Number Variable with explicit annotation
let numCatLives: number = 9;
numCatLives += 1;
numCatLives = "zero";

// Explicitly typed boolean variable:
let gameOver: boolean = false;
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

let foundMovie: string;

for (let i = 0; i < movies.length; i++) {
  if (movies[i] === 'Amadeus') {
    foundMovie = 'Amadeus'
  }
}
