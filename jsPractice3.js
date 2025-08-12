/*   Qs1. Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
    Forexample: for array[7,9,0,-2] and n=3 
    Print,[7,9,0]    
*/

let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, 3));


/*    Qs2. Write a JavaScript program to get the last n elements of an array.[n can be any positive number].
    Forexample: for array[7,9,0,-2] and n=3
    Print,[9,0,-2
*/

let arr1 = [7, 9, 0, -2];
arr1.shift();
console.log(arr1);


// Qs3. Write a JavaScript program to check whether a string is blank or not.
let str = prompt("Enter a stirng");
if (str.length == 0) {
    console.log("string is empty");
} else {
    console.log("string is not empty");
}

