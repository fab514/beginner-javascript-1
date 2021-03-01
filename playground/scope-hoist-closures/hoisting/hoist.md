# Hoist
## Hoisting function declaration
- In JS hoisting is caused when you run a fuction before declaring it. Run a function before it exists. 
- Hoisting only works with regular functions. An arrow function or a function set in a variable will not run. 
```js
sayHi();
function sayHi() {
    console.log('hey!');
}
//Even though running the function was put in first JavaScript will automatically pull the declaration up to become first. (note you do not see this happen it will still look to have the same format)
function sayHi() {
console.log('hey!');
}
sayHi();
```
- You can have the function out of order in your code however if the function is called it will still run in any order. This example shows calling a function within the sayHi function. 
```js
sayHi();

function sayHi() {
    console.log('hey!');
    console.log(add(10, 2));
}

function add(a, b) {
    return a + b;
}
```
- Good practice to organize code in the correct order where declaring a function is run before the function is called. In this example case.
```js
function add(a, b) {
    return a + b;
}
function sayHi() {
    console.log('hey!');
    console.log(add(10, 2));
}
sayHi();
```
## Hoisting Variable Declaration
- Similar to function hoisting. JS is able to run a variable before it has been declared. The way js will fix this is by declaring the variable  before being called at change the value of that variable. 
```js
console.log(age);
var age = 10;
// the following is how js code will see the code above. 
let age; // variable declared
console.log(age);
age = 10; // variable value changed
``` 



