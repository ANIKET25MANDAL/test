const max = prompt("Enter any maximum number");


const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    if (parseInt(guess) == random) {
        console.log("your are right! congrats!", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint: your guess was too small. please try agin");
    } else if (guess > random) {
        guess = prompt("hint: your guess was too big please try agian");
    } else {
        guess = prompt("your guess was wrong. Please try again");
    }
}

