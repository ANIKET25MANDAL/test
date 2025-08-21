/*
Qs1. Try out the following events in Event Listener on your own:
-mouseout
-keypress
-Scroll
-load
[UseMDNforhelp]
*/


//mouseout
let btn = document.querySelector("button");

btn.addEventListener("mouseout", function () {
    this.style.backgroundColor = "red";
});
//keypress
let input = document.querySelector("input");
input.addEventListener("keypress", function () {
    console.log("key was pressed.");
});
//Scroll
let scroll = document.querySelector("#scroll");
scroll.addEventListener("scroll", function () {
    console.log("page was scrolled");
})
//load
let img = document.querySelector("#hope");
if (img.complete) {
    console.log("Image was already loaded (from cache)");
} else {
    img.addEventListener("load", function () {
        console.log("Image was loaded");
    });
}





// Qs2. Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.
let button=document.createElement("button");
button.innerText="Button was created";
let body=document.querySelector("body");
body.append(button);
button.addEventListener("click",function(){
  button.style.color="green";
  button.style.backgroundColor="red";
});
