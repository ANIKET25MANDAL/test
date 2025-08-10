// Qs1. Create an number variable num with some value.
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not .

let number = 220;
if (number % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}


// Qs2.Take the user's name & age as input using prompts.Then return back the following statement to the user as an alert (by substituting their name & age):
// name is age years old.
let user_name = prompt("Enter your name");
let user_age = prompt("Enter your age");
alert(`${user_name} is ${user_age} years old.`);

