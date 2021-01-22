console.log('it works')
// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
  div.classList.add('wrapper');

// put it into the body, any child elements will also show. 
   document.body.appendChild(div);

 // make an unordered list 
 // add three list items with the words "one, two, three" in them  
 const ul = `
 <ul>
 <li>One</li>
 <li>Two</li>
 <li>Three</li>
 </ul>
 `;
 // Put that list in the above wrapper.    
    div.innerHTML = ul;
    console.log(div);

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = '250';

// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy!';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class = myDiv>
<p>Paragraph One</p>
<p>Paragraph Two</p>
</div>
`

// put this div before the unordered list from above.
const ulElement = div.querySelector('ul');
console.log(ulElement);
// You have to turn the myHTML string into an element. 
ulElement.insertAdjacentElement('beforebegin', myHTML); 
// After turning the ul string into an element you can use it as an element.


// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph

myDiv.firstElementChild.classList.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// Do this by using a template.
function generatePlayerCard(name, age, height) {
    const html = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In dog years this person would be ${age * 7}. That would be a tall dog!</p>
        </div>
        `;
        return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
 // remember you have to return or console the function. 


// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('fe', 30, 150);
cardsHTML += generatePlayerCard('andrew', 30, 150);
cardsHTML += generatePlayerCard('houdini', 30, 150);
console.log(cardsHTML);
cards.innerHTML = cardsHTML;

// append those cards to the div

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.closest('.playerCard').remove();
    // closest will remove the closest 'related' element.
    // buttonThatGotClicked.parentElement.remove();
    // removal using the parentElement will not find anything except the parent.
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));