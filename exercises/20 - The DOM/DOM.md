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
