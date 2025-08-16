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


/*Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str=“abcdabcdefgggh”
         ans=“abcdefgh”   */
function getUnique(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}
let str = "abcdabcdefgggh";
console.log(getUnique(str));
