// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.  
const arrayAverage = (arr) => {
    let avg;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
let arr = [12, 34, 56, 78]
console.log(arrayAverage(arr));


// Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

const isEven=(n)=> n%2==0;
console.log(isEven(661));
