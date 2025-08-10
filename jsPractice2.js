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

/* Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.
For a given string print if it is golden or not.  */
let str = 'ANIKET';
if ((str[0] == 'a' || str[0] == 'A') && (str.length > 5)) {
    console.log("golden string");
}
else {
    console.log("not a golden string");
}


// Qs5. Write a program to find the largest of 3 numbers..

let a = 576888, b = 87888, c = 56789977;
if (a > b && a > c) {
    console.log(a);
} else if (b > c) {
    console.log(b);
} else {
    console.log(c);
}


/* Qs6(Bonus).
Write a program to check if 2 numbers have the same last digit. 
Eg:32 and 47852 have the same last digit i.e.2  */

let num1 = 49488;
let num2 = 9494888;
if ((num1 % 10 == num2 % 10)) {
    console.log("Their last digit is same");
} else {
    console.log("Their last digit is not same");
}


