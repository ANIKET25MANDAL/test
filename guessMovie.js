const favMovie = "Avatar";
let guess = prompt("Enter your favoriate movie");

while ((guess !== favMovie) && (guess !== 'quit')) {

    guess = prompt("Wrong guess. Please try again");
}
console.log("Congratulations! you have guessed right movie");