# Etch-a-sketch

```js
// Select the elements on the page - canvas, shake button
const canvas = document.querySelector ('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // there is also 3d canvas
const shakebutton = document.querySelector('.shake');

// Setup our canvas for drawing.
// const width = canvas.width; // Long way, short way below
// const height = canvas.height;

// make a variable called height and width from the same properties on our canvas. 
const { width, height } = canvas;

// Create random x and y starting points on the canvas 
// Math.random will not take any input and will give you random numbers under 1. 
// If you put in Math.random() * 100 it will give you random numbers under 100. 
// If you add Math.floor(Math.random * 100) you will get whole numbers between 0 and 99
// Math commands will help us put the dot on random sections of the etch a sketch. 

let x = Math.floor(Math.random() * width); 
let y = Math.floor(Math.random() * height); 

ctx.lineJoin = 'round'; // Default the line is square so setting to round will make it look smoother. 
ctx.lineCap = 'round'; // This will change the shape of the dot. You can use things like round or square. 
ctx.lineWidth = 10; // Default the line will have a width of 1px so setting it to 10 will make it wider. no need to add specify px
// look up ctx in console to see canvas set up and elements. 

ctx.beginPath() // will start the drawing
ctx.moveTo(x, y); // 200px to the left and the top
ctx.lineTo(x, y);
ctx.stroke();


// Write a draw function

// write a handler for the keys

// clear/shake function

// listen for arrow keys
// write a handler for the keys
// The following will allow you to stop moving the window with arrow key but not cancel default for the rest of the keyboard keys.  

function handleKey(e) { 
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
        console.log(e.key); // will show you handling the key. 
        console.log('HANDLING KEY');
    }
    
}

```
## Note may have some of the same code but added notes. 

```js
// Select the elements on the page - canvas, shake button
const canvas = document.querySelector ('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // there is also 3d canvas
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10; // When a true constant no changes can use all uppercase to show it is fully constant. 
// Setup our canvas for drawing. Benefit to using this is you can easily change all of the amounts in the file but only changing one variable.


// make a variable called height and width from the same properties on our canvas. 
const { width, height } = canvas;


let x = Math.floor(Math.random() * width); 
let y = Math.floor(Math.random() * height); 

ctx.lineJoin = 'round';  
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;  

ctx.beginPath() // will start the drawing
ctx.moveTo(x, y); // Using x, y will can be set up withing Math commands. 
ctx.lineTo(x, y);
ctx.stroke();


// Write a draw function
// Using this function inside of the handleKey function event will allow you to draw using arrows. 
function draw({ key }) { // object destucturing making the names shorter. 
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y values depending on what the user did.
     // Below will only have the line move up and to the left from the starting point. 
    x -= MOVE_AMOUNT; // same as x = x -10; or MOVE_AMOUNT if being used. 
    y -= MOVE_AMOUNT; // same as y = y -10;
    ctx.lineTo(x, y);
    ctx.stroke();
}
// write a handler for the keys
// The following will allow you to stop moving the window with arrow key but not cancel default for the rest of the keyboard keys.  

function handleKey(e) { 
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
    
}
// clear/shake function

// listen for arrow keys
window.addEventListener('keydown', handleKey);

```

## Finished product of blck lined etch-a-sketch'
- Note the change in js to make the line from black to colored. Also the add of clear canvas by using the shake button. 

```js
// Select the elements on the page - canvas, shake button
const canvas = document.querySelector ('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // there is also 3d canvas
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10; // Good visual when there is a true constant/ no changes.  
// easily adjust amounts in the file marked as MOVE_AMOUNT

// make a variable called height and width from the same properties on our canvas. 
const { width, height } = canvas;


let x = Math.floor(Math.random() * width); 
let y = Math.floor(Math.random() * height); 

ctx.lineJoin = 'round';  
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;  

ctx.beginPath() // will start the drawing
ctx.moveTo(x, y); // Using x, y will can be set up withing Math commands. 
ctx.lineTo(x, y);
ctx.stroke();


// Write a draw function
// Draw line using Arrow keys
function draw({ key }) {  
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // Move our x and y based on what the user did. 
    switch (key) {
        case 'ArrowUp':
            y -=  MOVE_AMOUNT; // y amount is decromented
            break;
        case 'ArrowRight':
            x +=  MOVE_AMOUNT; // x amount is incremented
            break;
        case 'ArrowDown':
            y +=  MOVE_AMOUNT; // y amount is incremented
            break;
        case 'ArrowLeft':
            x -=  MOVE_AMOUNT; // x amount is decromented
            break;
        default: // Best practice to have a default. 
            break;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}
// write a handler for the keys


function handleKey(e) { 
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
    
}
// clear/shake function

// listen for arrow keys
window.addEventListener('keydown', handleKey);

```
## Adding Color changes by using HSL
- hue, saturation, lightness.

```js
// Select the elements on the page - canvas, shake button
const canvas = document.querySelector ('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // there is also 3d canvas
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10; // Good visual when there is a true constant/ no changes.  
// easily adjust amounts in the file marked as MOVE_AMOUNT

// make a variable called height and width from the same properties on our canvas. 
const { width, height } = canvas;


let x = Math.floor(Math.random() * width); 
let y = Math.floor(Math.random() * height); 

ctx.lineJoin = 'round';  
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;  

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath() // will start the drawing
ctx.moveTo(x, y); // Using x, y will can be set up withing Math commands. 
ctx.lineTo(x, y);
ctx.stroke();


// Write a draw function
// Draw line using Arrow keys
function draw({ key }) {  
    // increment the hue
    hue += 10; 
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`; 
    // even though used before the code will not automatically notice the change. You need to specifically add it to the stroke style. 
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // Move our x and y based on what the user did. 
    switch (key) {
        case 'ArrowUp':
            y -=  MOVE_AMOUNT; // y amount is decromented
            break;
        case 'ArrowRight':
            x +=  MOVE_AMOUNT; // x amount is incremented
            break;
        case 'ArrowDown':
            y +=  MOVE_AMOUNT; // y amount is incremented
            break;
        case 'ArrowLeft':
            x -=  MOVE_AMOUNT; // x amount is decromented
            break;
        default: // Best practice to have a default. 
            break;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}
// write a handler for the keys


function handleKey(e) { 
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
    
}
// clear/shake function // check css for the shake.
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height); // will remove some or all of the canvas. 
    canvas.addEventListener('animationend', 
    function() {
        console.log('Done the Shake');
        canvas.classList.remove('shake');
    }, 
    { once: true });
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);