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
//[Use template Literals to print this sentence]
let user_name = prompt("Enter your name");
let user_age = prompt("Enter your age");
alert(`${user_name} is ${user_age} years old.`);


// Qs3.Write a switch statement to print the months in a quarter.
// Months in Quarter1:January, February, March
// Months in Quarter2:April, May,June 
// Months in Quarter3:July, August, September
// Months in Quarter4:October,November,December
// [Use the number as the case value in switch]
let quarter = 1;
switch (quarter) {
    case 1: console.log("January, February, March");
        break;
    case 2: console.log("April, May, June");
        break;
    case 3: console.log("July, August, September");
        break;
    case 4: console.log("October, November, December");
        break;
    default:
        console.log("Enter the correct month");
}

