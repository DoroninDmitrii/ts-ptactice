// String Variable With Explicit Annotation
var movieTitle = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; //This results in an error!
movieTitle.toUpperCase();
// Number Variable with explicit annotation
var numCatLives = 9;
numCatLives += 1;
numCatLives = "zero";
// Explicitly typed boolean variable:
var gameOver = false;
gameOver = true;
gameOver = "true";
// Type Inference
var tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;
var isFunny = false;
isFunny = true;
isFunny = "asd";
var movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
var foundMovie;
for (var i = 0; i < movies.length; i++) {
    if (movies[i] === 'Amadeus') {
        foundMovie = 'Amadeus';
    }
}
