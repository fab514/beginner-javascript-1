// Select the elements on the page - canvas, shake button
const canvas = document.querySelector ('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // there is also 3d canvas
const shakebutton = document.querySelector('.shake');

// Setup our canvas for drawing.


// make a variable called height and width from the same properties on our canvas. 
const { width, height } = canvas;


let x = Math.floor(Math.random() * width); 
let y = Math.floor(Math.random() * height); 

ctx.lineJoin = 'round';  
ctx.lineCap = 'round';
ctx.lineWidth = 10;  

ctx.beginPath() // will start the drawing
ctx.moveTo(x, y); // Using x, y will can be set up withing Math commands. 
ctx.lineTo(x, y);
ctx.stroke();


// Write a draw function

// write a handler for the keys

// clear/shake function

// listen for arrow keys