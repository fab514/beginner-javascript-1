# Events
## Event Listener
- Event Listener steps: look for something, listen for something, do something.
```js
const butts = document.querySelector('.butts');

butts.addEventListener('click', function (){
    console.log('Butts...It Got Clicked!!!!');
});
```
- Button click is the most common event.
- Callback function is a regularfunction that is called back by an add event listener. Browser calls the function instead of the user.
- a anonomous function like above has no name. No name to reference this function ().
- Wes usually begins a function name with handle whenever callback function is used by an event handler.
- Instead of passing a anonomous function you can pass a reference to a function name; see below.
- It is best to pass a function name instead of anonomous so you can use the same function more then once. 

```js

function handleClick() {
    console.log('Butts...It Got Clicked!!!!');
}
// don't use paranthasis at the end of the function since you don't have to call the function the browser does it for you.
butts.addEventListener('click', handleClick);
```

### Removing an event. 
- removeEventListener is how you remove an event. 
- The function added to the event you are trying to remove needs to be put in after the event.
- Binding a function that is bound to an elements, if you remove the element you are unbinding the function. 
- You can only removeEventListener with either a name or arrow function.
## Note! You can use Proto in console to view what methods available on an element.

```js
// eventlistener.remove('event', function it is attached to.)
butts.removeEventListener('click', handleClick);
// Technically below is a anonomous function however since its within a variable it can be still referenced by using that variable name.
const hooray = () => console.log('HOORAY!');
butts.addEventListener('click', function() {
    console.log('Im an anon');
});
cool.addEventListener('click', hooray);
// event listener of click is passed through the function hooray.
```
### Using event listeners to multiple items.
- querySelectorAll will select all items related to 'button.buy'

```html
  <h2>Buy Buttons</h2>
  <button class="buy">Buy Item 1</button>
  <button class="buy">Buy Item 2</button>
  <button class="buy">Buy Item 3</button>
  <button class="buy">Buy Item 4</button>
  <button class="buy">Buy Item 5</button>
  <button class="buy">Buy Item 6</button>
  <button class="buy">Buy Item 7</button>
  <button class="buy">Buy Item 8</button>
  <button class="buy">Buy Item 9</button>
  <button class="buy">Buy Item 10</button>
  ```
```js
// listen for an event on multiple items.
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
    console.log('BUYING ITEM');
}
console.log(buyButtons);
// buyButtons.addEventListener('click', buyItem);

// This is to loop each buyButtons item. The function(buyButton) is used to call the anonomous function. 
buyButtons.forEach(function(buyButton) {
    console.log(buyButton);
})

// The parameter buyButton can be named anything as long as it is referenced.
function attachListenerBuyButtonClick(buyButton) {
    console.log('Binding the Buy Button');
    buyButton.addEventListener('click', buyItem);
}
console.log(buyButtons);
console.dir(butts);
// buyButtons.addEventListener('click', buyItem);

buyButtons.forEach(attachListenerBuyButtonClick);

// You can use arrom functions for event listeners however it is considered a anonomous function so it can not be unbound (removed). 
buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('YOU CLICKED IT');
    });
});