const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

function handleClick() {
    console.log('Butts...It Got Clicked!!!!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function() {
    console.log('Im an anon');
});
cool.addEventListener('click', hooray);

// The function added to the event you are trying to remove needs to be put in. 
butts.removeEventListener('click', handleClick);

// listen for an event on multiple items.
// button query selector will usually be put toward the top of a file. 
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) { // event is a parameter placeholder.
    // it can be named anything but mostly named event or e.
    console.log('You clicked a button!');
    // console.log(button.textContent);
    // console.log(event.target.dataset.price); // this is a string
    const button = event.target; // is able to be used during capture or bubble phase
    console.log(event.currentTarget); // Will only use the event on the current target. 
    console.log(event.target === event.currentTarget); // same element
    console.log('You are buying it!');
    // Stop this event from bubbling up
    // event.stopPropagation(); // stops an event from happening
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
    'click', 
    function(event) {
    console.log('You clicked the Window');
    console.log(event.target); // will show which element has been clicked.
    console.log(event.type); // shows the type of event, in this case clicked.
    console.log(event.bubbles); // shows if bubble is available. Will be false is stopPropagation is active. 
    // event.stopPropagation(); //stopPropagation can be used to stop bubbling up or capture down. 
},
{ capture: true } // interview question but not used much.
// Capture apart of capture phase (down) of event phases, bubbling phase is bubble up.
)

const photoEl = document.querySelector('.photo');
photoEl.addEventListener ('mousemove', function(e) {
    console.log(e.currentTarget);
    console.log(this); // The element placed before the . in this case photoEL will be the value of this. 
    // (this) is helpful but in addEventListener is is better to use e.currentTarget just in case you would like to change the function to an arrow => function.
}
)

