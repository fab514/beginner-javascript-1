# Click Outside
## Choosing random images- all images on page are not the same. 
```html
<div class="cards">
    <div class="card" data-description="Wes is cool">
      <img src="https://picsum.photos/200?random=1" alt="Wes Bos">
      <h2>Wes Bos</h2>
      <button>Learn more →</button>
    </div>
```
## A little CSS grid!
- Can it be helpful form my website? 
```css
  <style>

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 20px; 
      padding: 2rem; 
    }

    .card {
      background: white;
      padding: 1rem; 
      border-radius: 2px;
    }
    .card img {
      width: 100%;
    }
    .card h2 {
      color: black;
    }
    
    .modal-outer {
      display: grid;
      background: hsla(50, 100%, 50%, 0.7);
      position: fixed;
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      /* hide this modal until you need it */
      opacity: 0; 
      pointer-events: none;
      transition: opacity 0.2s;
      /* Pointer events will allow you to use the browser even though the inner modal is still there. Opacity fades the box so you can not see it. */
    }
    .modal-outer img {
      width: 100%;
    }
    .modal-outer.open {
      opacity: 1;
      pointer-events: all;
    }
    .modal-inner {
      max-width: 600px;
      min-width: 400px;
      padding: 2rem;
      border-radius: 5px;
      min-height: 500px;
      background: white;
      transform: translateY(-200%); 
      /* brings modal above the screen, the transition 2s into the tranform back to 0, normal position.  */
      transition: transform 2s;
    }
    .modal-outer.open .modal-inner {
      transform: translateY(0);
    }
  </style>
  ```
```js
  const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card'); // closest method to search for the closest card to the button. 
    // You can use $0.closest('div') to find the closest specified element- such as div.
    console.log(card);
}

cardButtons.forEach(button => 
    button.addEventListener('click', 
    handleCardButtonClick)
    );

const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card'); // closest method to search for the closest card to the button. 
    // Grab the image src
    const imgSrc = card.querySelector('img').src; // shows image source
    const desc = card.dataset.description; // show data-set (metadata) in each card.
    const name = card.querySelector('h2').textContent;
    // populate the modal with the new information. In this case bringing up a picture to the modal, different size and added text. 
    modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
    `;
    // show the model
    modalOuter.classList.add('open');
}

cardButtons.forEach(button => 
    button.addEventListener('click', 
    handleCardButtonClick)
    );

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest // ! creates a boolean of true or false. If the target is clicked it will be false and if the outside(closest) to the target is clicked it is true. 
    ('.modal-inner');
    if (isOutside) {
        modalOuter.classList.remove('open'); // If the boolean is true and the click is on the outside of the target the open event will be removed. This will close the module when clicking outside of it. 
    }
});
// Using the escape key to cancel out of the open event. 
window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
    }
})
```
## Fixing the transition bug in css
- Add a width  and height of the image to force it to load before doing the event. 

```js
 modalInner.innerHTML = ` 
    <img width="600" height "600" src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
    `;
```
```css
.modal-inner {
      max-width: 600px;
      min-width: 400px;
      padding: 2rem;
      border-radius: 5px;
      min-height: 500px;
      background: white;
      transform: translateY(-200%); 
      /* brings modal above the screen, the transition 2s into the tranform back to 0, normal position.  */
      transition: transform 2s;
    }
    .modal-outer.open .modal-inner {
      transform: translateY(0);
    }
    ```