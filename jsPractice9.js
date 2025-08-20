// Qs1. Create a new input and button element on the page using JavaScript only. Set the text of button to “Clickme”;
let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Click me";

document.querySelector('body').append(input);
document.querySelector('body').append(btn);

/*
Qs2. Add following attributes to the element:
- Change placeholder value of input to “username” 
- Change the id of button to “btn”
*/
input.setAttribute('placeholder', 'username');
btn.setAttribute('id', 'btn');