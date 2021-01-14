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








