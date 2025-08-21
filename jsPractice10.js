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

