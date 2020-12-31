# Debugging
## Console Methods
- console.error gives a function an error marking in your console. This does not always mean there is an error in code. Unless you are wanting to show an errors for certain functions. Message shows an X. 
- console.log can be put anywhere in the code. If you put the console.log within something such as a variable you must list the variable name to show the console.log
- console.warn gives the user a warning message when inserting the command of a certian function. Different message then console.error. console.warn shows an explanation point. 
```js
people.forEach((person, index) => {
  if (person.name === 'Wes') {
    console.error('dumb name');
  }
});
```
- console.table puts the information from the specified function into a table in your console.
- console.count will show in the console how many times the console.count was run. In this example if you type in doctorize() the number of times the function doctorized was used. console.count can also be run in variables. When used with a variable the count will change with each different variable put in. Ex. If I type in the console doctorize('felicia') it uses it's own count then if I were to type in doctorize('wes')
```js
function doctorize(name) {
  console.count('running doctorize');
  return `Dr. ${name}`;
}
function doctorize(name) {
  console.count(`running doctorize for ${name}`);
  return `Dr. ${name}`;
}

```
- console.group will group together the other consoles used in a function. You start by using console.group('hi') and end group by using console.groupEnd('hi'). Make sure to use the same string name in the end of the group as the beginning. 
```js
function doALotOfStuff() {
  console.group('Doing Some Stuff');
  console.log('I am the one.');
  console.warn('Watch Out!!');
  console.error('Hey!');
  console.groupEnd('Doing Some Stuff');
}
```
- You can also group data that is in your code to keep it more organized. In the example below we have an original string of data that we would like to be shown grouped together. They are grouped together by using console.group. If you would like the different parts of the group to start collapsed you can use console.groupCollapsed()
```js
const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];
people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log(`Done!!`);
  console.groupEnd(`${person.name}`);
});
```
## Callstack, Stack Trace
- A function calling a function calling another function. Multiple function within one function. Similar to a pathway in git. 
- Callstack is helpful to find out error in a long strand of functions. In chrome the error will show in what line and function of the callstack needs to be fixed. 
```
debugging.js:59 Uncaught ReferenceError: doesntExist is not defined
    at greet (debugging.js:59)
    at go (debugging.js:65)
    at <anonymous>:1:1
  ```
## Grabbing Elements 
- In the browser you can find a specific section of code by using the grabbing tool. When you hover over a section of the website it becomes highlighted. When you open up your console you can type in $0 to show the last section you clicked on in the site and $1 you can show the second to last section you clicked. Higher the number the furthur it goes back in your history of the grabbing tool. 
- $ Is for a search in the browser within the console-cannot be used from your code. $('p') will find you the first paragraph tag. $$('p') will show you all of the results for paragraph tags. 
## Breakpoints
- When you put in the word debugger there will be a break in JavaScript from the sources in inspect. 
```js
people.forEach((person, index) => {
  debugger;
  console.log(person.name);
});
```
- Within source you click the play command it will continue js until the next debugger/pause. Skipping to the next line/looks like an arrow jumping over a dot. It will show the next line of js in the console. 
- In Firefox your sources, page options, and where your breaks of js code within the debugger tab. 
## Network Requests
- Different network requests are shown from your code and more information from your requests. This is within your network tab. This is useful for seeing more information in hyperlinks. 
## Break on Attribute
- Within the element you can pause js when the user  modifies the site. This will also show you where and what they did to modify. Example if a button is meant to get bigger each time you click it you can hover the button command and go to break on-attribute modifications. 
-When you refresh the page the modifications and debugger changes back to original state. 