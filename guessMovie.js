const favMovie = "Avatar";
let guess = prompt("Enter your favoriate movie");

while ((guess !== favMovie)) {
    if (guess === "quit") {
        console.log("you have quited the game");
        break;
    }
    guess = prompt("Wrong guess. Please try again");
}
if (guess === favMovie) {
    console.log("Congratulations! you have guessed right movie");
} else {
    console.log("you quit");
}
