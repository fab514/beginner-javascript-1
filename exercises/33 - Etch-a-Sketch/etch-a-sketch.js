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