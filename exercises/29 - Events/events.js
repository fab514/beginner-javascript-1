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

function buyItem() {
    console.log('BUYING ITEM');
}
// The parameter buyButton can be named anything as long as it is referenced.
function attachListenerBuyButtonClick(buyButton) {
    console.log('Binding the Buy Button');
    buyButton.addEventListener('click', buyItem);
}
console.log(buyButtons);
console.dir(butts);
// buyButtons.addEventListener('click', buyItem);

// buyButtons.forEach(attachListenerBuyButtonClick);

// arrow functions
buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('YOU CLICKED IT');
    });
});