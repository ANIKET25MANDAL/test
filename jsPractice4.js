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