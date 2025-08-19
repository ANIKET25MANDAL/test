// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let arr = [12, 34, 56, 23, 45];

const square = arr.map((e) => {
    return e * e;
})
let sum = square.reduce((a, e) => {
    return a + e;
})
let average = sum / square.length;
console.log(average);



// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

let a = [12, 34, 56, 78, -98];
let an = a.map((e) => {
    return e + 5;
})
console.log(an);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.
let s = ["Aniket", "Monu", "Gita", "Radha", "shyam"]
let upeer = s.map((s) => {
    return s.toUpperCase();
})
console.log(upeer);