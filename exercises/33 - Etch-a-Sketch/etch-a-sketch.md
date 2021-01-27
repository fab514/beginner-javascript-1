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
ctx.lineCap = 'round';
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