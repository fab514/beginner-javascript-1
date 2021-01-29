```js
function scrollToAccept() {
    // Add this function to filter out this event for a page without terms.
    // Stop this function from running. 
    const terms = document.querySelector('.terms-and-conditions');
    // ! boolean for no terms.
    if (!terms) {
        return; // quit this, there isn't that item on the page
    }
    terms.addEventListener('scroll', function(e) {
        console.log(e);
});   
}

scrollToAccept();
```

## Intersection Observer
- This observer is used to watch out for an element that is on, off, slightly on/off the page. When you tell the observer what element to watch out for it will give you a notification in the console that the user has passed that observed element. 
- In HTML we gave some of the text a strong tag with a class of watch. 

```js
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');

function obCallback(payload) {
    console.log(payload[0].intersectionRation); // Intersection ratio will show how much of the element is shown on the page between 0 and 1. 1 if it is fully on the page. We can use this method to help make sure the user made i all the way to the bottom of the scroll element. 
}
const ob = new IntersectionObserver(obCallback); // callback gets called at another time. This specific call back is fired when strong tag has been found. 

ob.observe(watch); // call observe method to watch. 


// intersection observer

``` 

## Using intersectionRation to make sure user scrolled all the way to the bottom

```js
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');

function obCallback(payload) {
    console.log(payload);
}
const ob = new IntersectionObserver(obCallback, { 
    root: terms,
    threshold: 1, // If the element is small enough you can use 1, if it a large element like a div you will have to use a decimal 0.1 because the div is too long to be fully on the page. 
});

ob.observe(terms.lastElementChild);

```
## How to make the button work once user reaches the end.

```js

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        // stop observing the button
        ob.unobserve(terms.lastElementChild);
    }
}
const ob = new IntersectionObserver(obCallback, { 
    root: terms,
    threshold: 1,  
});

ob.observe(terms.lastElementChild);


// intersection observer