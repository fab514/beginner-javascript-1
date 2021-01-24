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

function handleBuyButtonClick(event) {
    // console.log(button.textContent);
    // console.log(event.target.dataset.price); // this is a string
    const button = event.target;
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget); // same element
    console.log('You are buying it!');
    // Stop this event from bubbling up
    event.stopPropagation(); // stops an event from happening
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(event) {
    console.log('You clicked the Window');
    console.log(event.target); // will show which element has been clicked
})

