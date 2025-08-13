/* Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
  Example:if arr=[1,2,3,4,5,6,2,3] & num=2
  Result should be arr=[1,3,4,5,6,3] */
let num = [1, 2, 3, 4, 5, 6, 2, 3];
let del_num = 2;
for (let i = 0; i < num.length; i++) {
    if (num[i] == del_num) {
        num.splice(i, 1);
    }
}
console.log(num);


/*Qs2 .Write a JS program to find the no of digits in a number.
 Example: if number=287152, count=6    */

let number = 287152;
let count = 0;
let copy = number;
while (copy > 0) {
    copy = Math.floor(copy / 10);
    count++;
}
console.log(`Number of digits present in ${number} = ${count}`);


/* Qs3. Write a JS program to find the sum of digits in a number.
 Example: if number=287152, sum=25 */

let n = 287152;
let sum = 0;
let last_digt = 0;
while (n > 0) {
    last_digt = n % 10;
    n = Math.floor(n / 10);
    sum = sum + last_digt;
}
console.log(sum);



/*  Qs4. Print the factorial of a number n.
    [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
    Example:
    7!(factorial of 7) = 1x2x3x4x5x6x7 = 5040
    5!(factorial of 5) = 1x2x3x4x5 = 120
    3!(factorial of 3) = 1x2x3 = 6 
    0! Is always 1   */

let f = prompt("Enter any number for which you want factorial");
let factorial = 1;
if (f == 0) {
    console.log(`Factorial of ${f} is 1`);
} else {
    for (let i = f; i > 0; i--) {
        factorial = factorial * i;
    }
}

console.log(`Factorial of ${f} is ${factorial}`);


// Qs5. Find the largest number in an array with only positive numbers.

let array = [23, 98, 67, 859, -90, 23];
let largest = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
console.log(`Largest number in an array = ${largest}`);