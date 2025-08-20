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


// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

let button = document.querySelector('#btn');
button.style.backgroundColor = 'blue';
button.style.color = 'white';


/*
Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
Change its color to purple.
*/
let h1=document.createElement('h1');
h1.innerHTML="<u>DOM Practice</u>";
document.querySelector('body').append(h1);
h1.style.color="purple";
h1.style.textDecoration="underline";

