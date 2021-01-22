# DOM stands for Document Object Models
- this is when javascript is being used with html. 
- Our Global Scope is the window. 
## Global Variable
- Anything in browser window is stored in the global window element. 
- If you type in window.location or location you will be shown where the window iscurrently such as the web address, the hose etc.
- Navigator will show the device that you are on. helpful for web cam device etc. 
## js within html
- put your javascript src right before the closing tags of you body. This will allow the html to be run first before the JS.
## document.querySelector()
- selects an element on the page. query selector will select the first element on the page being selected. querySelectorAll will select all of the selected element on the page.
```js
const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
console.log(p);
console.log(divs);
```
- You can use the selector for child elements as well. If an image is within div. In the bottom exercise there is a child elment within the parent div. The js below will be how to access that. 
```html
<div class="items">
    <img src="https://picsum.photos/200" />
```
```js
const imgs = document.querySelectorAll('.item img');
```
- You can limit your search scope by using querySelector inside of a item instead the document. 
```js
const item2Image = item2.queryselector('img');
console.log(item2);
```
## Look up CSS selector
## console.dir
- console.dir will show the objects properties instead of the console.log showing the objects elements. 
```js
const heading = document.querySelector('h2');
console.dir(heading);
```
- You can set a different textContent property to an element. The following example has the original text content of the h2 element (in HTML) set to 'sub div'. Then we changed it to 'Wes is cool!'. Since the change came after another console.log(heading.textContent) both the original and the new content will be shown. 
```js
const heading = document.querySelector('h2');
console.log(heading.textContent);
// set the textContent property on that element
heading.textContent = 'Wes is cool';
console.log(heading.textContent);
```
## textContent vs innerText
- textContent gets the content of script and style elements. innerText only shows "human-readable' elements.
- textContent returns every element to the node, innerText is aware of styling and won't retun any hidden elements. 
- innerText takes CSS into account. 
- It is more beneficial to use textContent over innerText.
## innerHTML and outerHTML
- Using innerHTML you can see the contents of the element inside of your console. 
I am a heading
I am hidden
- using outerHTML you can see the element along with the inside of that element inside of your console. 
<h2>
I am a heading
<span>I am hidden</span>
</h2>

```js
console.log(heading.innerHTML);
console.log(heading.outerHTML);
```
## Adding text with insertAdjacentText

- There are 2 ways to add text within JS. A way to add text is to reuse the element and add text. insertAdjacent you can use to insert beforeend, beforebegin (will put the text before the element), afterbegin (will put it right before the text of the element) and afterend. Remember to rerun console.log to see the new result. 

```js
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

pizzaList.textContent = `${pizzaList.textContent} 2`; 
 
pizzaList.insertAdjacentText('beforeend', ' 2');
// insertAdjacent text is another. Easier way. 
console.log(pizzaList.textContent);

```
# node vs. elements
- everything in js is a node. Each line will be considered a node. A node is upgraded to an element when it's surrounded by tags. 
- On Mozzilla you can look up different methods for both node and elements. 

```js
I am a node
node me too
node me three!
<p>I am an element!</p>
```

# Class
- Using pic.classList you will get the output of what classes are located in the picture element. Rememeber that document.querySelector will find the specified element on your document. The classList will show you options for how to work with the classes. 
- classList.toggle used within the console. If the class is already added it will be removed, if the class is already moved it will be added. You can access this by putting pic.classList.toggle('round') within the console. The site will show the round class on the pic switching on and off each time you insert toggle. 
- types of classList commands include add, remove and contain. Contain is used within the console where you put in if a class is current.
- className will only show you the class names in an element but you will not be able to manipulate the classes like you can in classList. 


```md
<img class="nice cool" src="https://picsum.photos/600" />
```
```js
const pic = document.querySelector('.nice');
console.log(pic.classList);
pic.classList.toggle('round');
```
- Adding an event to your to you classList. The following event will toggle the the round function to turn off and on when you click the picture. 

```js
function toggleRound() { // toggleRound is the functions name. 
    pic.classList.toggle('round'); // the classList toggle will turn the class round on and off.
}
pic.addEventListener('click', toggleRound); // the event sets off the toggle whenever the image is clicked. 
```

# Working with Attributes. 
- Reminder that attributes are used to further describe an element. such as class, src, alt etc. 

- There are setters and getters. setters gives new information for the getter to recieve a big one being console.log. 
- When coming to the natural width or any information on an image the js code will be run before an image is fully loaded. the natural width will log as 0 right away and change to the width when you runn back in the pic.naturalWidth. This can be fixed by adding an event. 

```js
pic.alt ('rando image'); // setter 
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter

window.addEventListener('load', function() {
    console.log(pic.naturalWidth);
})

```
## getAttribute, setAttribute
- Rarely use the set or get attribute. It is best to use the attributes used by everyone instead of making your own. This will avoid bugs. SetAttribute names your own attribute instead of using alt, class etc.


```js
pic.setAttribute('fe-is-cool', 'really random picture');
console.log(pic.getAttribute('alt')); 
```
## Puting custom text in your meta data and dataSet. 
- Use .dataSet if you want to access the data attributes.
- You can add meta data to any element by using data- . The data- can be put with anything to describe the data your inserting. data-name= 'felicia' data-describe= 'tired' 

<img data-name='felicia' src="https://picsum.photos/200" />

```js
const custom = document.querySelector('.custom');
console.log(custom.dataset)
```
## Creating HTML 
- When creating HTML such as a paragraph, you need to put in content or the paragraph will not show on the browser. 

```js
const myParagraph = document.createElement('p'); // this will only create an HTML element.
myParagraph.textContent = 'I am a P'; // adds paragraph text
myParagraph.classList.add('special'); // Added a class of special
console.log(myParagraph); // shows this paragraph in console. 

const img = document.createElement('img'); // creates an image element
img.src = 'https://picsum.photos/500'; // source of the image
img.alt = 'Nice Photo'; // alternate text of the image. 
// To add a class to your image use classList.add
img.classList.add('cute');
// To add an image to an already created div element use 
div.appendChild('img');

const myDiv = document.createElement('div'); // creates div element
myDiv.classList.add('wrapper'); // adds a wrapper (treats element like an object) to the div element.
console.log(myDiv); // shows myDiv in console. 

// puts elements myParagraph and myImage into the myDiv object
myDiv.appendChild(myParagraph); 
myDiv.appendChild(myImage);

// puts the myDiv object on the DOM(can be seen on the page.) Putting the elements within myDiv will allow the apendChild to be run once. All child elements will also show. 
document.body.appendChild(myDiv);

// This is a very long way to code a unordered list through js.
const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Three';
list.appendChild(li)

document.body.insertAdjacentElement('afterbegin', list);
const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'One';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);

// Short way to create a list
  const ul = `<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    </ul>`;
div.innerHTML = ul;
console.log(div);

```

## Creating with Strings
- use .innerHTML with `backticks` for a more efficient way to create an HTML block. 

```js
const item = document.querySelector('.item');

item.innerHTML = `
    <div>
        <h1>Hey, how are you?!</h1>
    </div>
`;
console.log(item.innerHTML);
```

## You can create a HTML template and insert elements into the template.
- Downside is that this is a string instead of being elements. So you will not be able to set classes to it.  

```js
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
        <h2>Cute ${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;

item.innerHTML = myHTML;
console.log(item.innerHTML);

```
## This is a way you can manipulate a HTML template as an element. 

```js

item.innerHTML = myHTML;

const itemImage = document.querySelector('.wrapper img');

itemImage.classList.add('round');

console.log(itemImage);

item.innerHTML = myHTML;
console.log(item.innerHTML);

```
## Turning a string into a DOM element
- A range is a set of element that can be used. A range will be found in the console

```js
const myFragment = document.createRange()
.createContextualFragment(myHTML);
console.log(myFragment)
// Strings that were turned into elements will not be seen on the browser however we can use them like we use normal elements in the console. 

console.log(myFragment.querySelector('img'));
console.log(myFragment);
```

<p class="wes">I am Wes, I <em>love</em> to bbq</p>

```js
const wes = document.querySelector('.wes');

// Will only show the em tag (or any added tag) within the wes element
console.log(wes.children);
// Will show each node inside the wes element. Text, EM, Text
//<p class="wes">I am Wes, I <em>love</em>to bbq</p>
console.log(wes.childNodes);
``` 
-- Note that you can use the $0 on anything selected in the elements tab of the browser as a shortcut to look up that element in the console. You have to click on the element in the elements tab in order for the shortcut to work in the console. 

## the children tags below can be used to navigate between elements in place of the querySelector however querySelector is easier to search for a certain element. 
```js
const wes = document.querySelector('.wes');

// Will only show the em tag (or any added tag) within the wes element
console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);
// Will show each node inside the wes element. Text, EM, Text
//<p class="wes">I am Wes, I <em>love</em>to bbq</p>
console.log(wes.childNodes);
```

## removing elements.
- You can remover elements in a browser by using remove. Remember you can use $0 as a shortcut to the selected element. Below will remove the heading 2 element from the browser. 
$0
<h2>...</h2>
$0.remove()

- You can also remove an element created through javascript. When you remove that element it will no longer appear on the browser however, if you console.log that deleted element it still shows in the console. It is saved in the js memory so it could be used again. 
```js

// Can a created JS element also be removed?
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
```
## From CARDIO
```js

const myHTML = `
<div class="myDiv">
    <p>Hello my name is Felicia!</p>
    <p.>What is your name?</p>
</div>
`;

// put this div before the unordered list from above. 
// You have to turn the myHTML string into an element. 
const ulElement = div.querySelector('ul');
console.log(ulElement)
// After turning the ul string into an element you can use it as an element.
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
console.log(myDiv);
// remove the first paragraph
myDiv.firstElementChild.remove();

