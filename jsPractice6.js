// Qs1. Write a JavaScript function that returns array elements larger than a number.
function getElements(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i])
        }
    }

}
let arr = [12, 34, 56, 98, 11, 54];
console.log(getElements(arr, 34));
