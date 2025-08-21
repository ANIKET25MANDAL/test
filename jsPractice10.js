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



/*
Qs3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML.
The purpose of this input element is to enter a user’s name so it should only input letters from a-z, A-Z and space(all other characters should not be detected). 
 Whenever the user inputs their name, their input should be dynamically visible inside the heading.
 [Please note that no other character apart from the allowed characters should be visible in the heading]
 */
 let i=document.querySelector("#in");
  let heading=document.querySelector("#display");
 i.addEventListener("input",function(){
    let cleanValue = this.value.replace(/[^a-zA-Z ]/g, "");
    this.value = cleanValue; // Update the input field
    heading.innerText = cleanValue; // Update the heading
    console.log("key was pressed");
 });

 