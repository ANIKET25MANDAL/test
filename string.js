let a = "apple";
let b = "banana";
if ((a[0] === 'a') && (a.length > 3)) {
    console.log(`Good string`);
}
else if ((b[0] === 'a') && (b.length > 3)) {
    console.log(`Good string`);
}
else {
    console.log("Not a good string");
}





let Day = 65;
switch (Day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter a proper day");
        break;
}

alert("Something is wrong");

console.error('An error has occured in your scrren');

console.warn("Please check your email");

let name = prompt("Enter your name please");
console.log(name);
