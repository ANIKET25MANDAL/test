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



/*Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
Example: country=["Australia","Germany","United States of America"]
output: "United States of America"     */

function longestCountry(country) {
    let longest = country[0];
    for (let i = 1; i < country.length; i++) {
        if (longest.length < country[i].length) {
            longest = country[i];
        }
    }
    return longest;
}
let country = ["Australia", "Germany", "United States of America"];

console.log(longestCountry(country));


// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

function countVowels(name) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            count++;
        }

    }
    return count;
}
let s = "count number of vowels";
console.log(`Number of vowels present= ${countVowels(s)}`);


// Qs5. Write a JavaScript function to generate a random number within a range(start,end).

function generateNumber(start, end) {
    let diff = end - start;
    let num = Math.floor(Math.random() * diff) + start;
    return num;
}
console.log(generateNumber(3, 53));