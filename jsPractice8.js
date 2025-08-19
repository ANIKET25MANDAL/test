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

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
    let doubleArgs = args.map(e => e * 2);
    return [...arr, ...doubleArgs];
}
let ab = [1, 2, 34, 56, 23, 45, 67];
console.log(doubleAndReturnArgs(ab, 10, 20, 30));


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2) {


    return {
        student1: { ...obj1 },
        student2: { ...obj2 }
    };
}
let student1 = {
    name: "Aman",
    rollno: '0131CL211005',
    branch: 'AIML',
    college: 'JNCT'
};
let student2 = {
    name: "Abhimanyu",
    rollno: '0131CL211007',
    branch: 'CSE',
    college: 'JNCT'
};
console.log(mergeObjects(student1, student2));
