# Scope
- Where are my variables and elements available to me. 
- If you have a variable is within a function it is not available outside of that function. Scope is the reason for this. 
## Global Variables
- If you have a script tag, a javascript file or run it through a console. Anywhere you declare a variable it will be available anywhere in your application. 
- Using global scope is not always a good idea. 
- Global variable is out in the open not within a function. A global variable can be shared between a .js file and script tag in .html file. 
- Window in console is attached to the var command and is openly scoped. let and const commands can be global however are not attached to window. If you put in console window.first or window.second it will come back as undefined. If you type in window.age it will show 31 since the command being used is var. 
```js
const first = 'felicia';
let second = 'brenner';
var age = '100';
```
- functions are also available inside of window. 
## Function Scoping
- Whenever a variable is used in a function the variable can only be accessed inside of that function. In the example below the age will be shown because it is a global variable the hair will not work because go is not being defined within the function. Keeps variables within curly brackets. 
```js 
var age = '100';
function go() {
    const hair = 'brown';
}
console.log(age);
console.log(hair);
// This will work since it is within the function. 
var age = '100';
function go() {
    const hair = 'brown';
    console.log(hair);
}
console.log(age);
```
## Scope lookout
- If a variable is not found a function js will go up a level higher, outside of the brackets, to find that variable. Example below we put in consol.log(age) within our function, even though the age variable is not in the function the code will still run because scope lookout pulled the age variable from the previous level. 
```js
var age = '100';
function go() {
    const hair = 'brown';
    console.log(age); // age is shown the level above the function. 
    console.log(hair);
}
// In this example the age 200 will show instead of 100. This is because the variable age was found within the local function. 
var age = '100';
function go() {
    const age = '200'; 
    const hair = 'brown';
    console.log(age);
    console.log(hair);
}
```
- Even though allowed to make the same variable name twice, within and out of a function you should not. Usung the same variable name can limit you from reaching out to a specific variable. 
## Block Scope 
- Block scope is used when there are multiple scopes in one function. Function will scope to it's parent function. The rules of function scoping and lookout scope apply to the scope within the main scope. You can recoginize block scopes when there is more then one set of curly brackes. 
- Most likely uses if statements. 
- When you use a var statements this is a command that can link out of the block. A var variable is function scoped, a const or let variable is block scoped. If you want to ensure that the statement does not reach outside of the block use const or let instead of var. 
```js
function isCool(name) { //function scope
    let cool;
    if (name === 'felicia') { // second scope. Scope lookout rules. 
        cool = true;
    }
    console.log(cool);
    return cool;
}
```
## Lexical scoping or statically scoping
- looks where a variable is defined and not where it is run. In the example, when we are looking for logDog the console will bring up snickers and not sunny. The reason for this is that logDog is defined in the function logDog() and not in the function go().
```js 
const dog = 'snickers';
function logDog() {
    console.log(dog);
}
function go() {
    const dog = 'sunny';
    logDog();
}
go();
// This example will come up with Rufus when putting in logDog
// this is because 'Rufus' is put as the first argument and would be run first. 

const dog = 'snickers';
function logDog(dog) {
    console.log(dog);
}
function go() {
    const dog = 'sunny';
    logDog('Rufus'); 
}
go();

// In this example Sunny will return when logDog is typed in. Because of blocked scope the dog argument is reached within it's own block first which would be 'sunny'
const dog = 'snickers';

function logDog(dog) {
    console.log(dog);
}

function go() {
    const dog = 'sunny';
    logDog(dog); 
}
go();
```
## Best practices
- Try not to use global variables. Global variables can lead to bugs down the road. Bugs with global variables are even more likely if you are coding with a team and 2 variables of the same name is declared. If you were to put in a global variable you would have to use window.iAmAGlobalVariable. = 'wes'. 
- In Function Scoping it is allowed to declare functions within a parent function.
```js
// example is the function sayHi(name) will use the function yell by putting name in uppercase letters. 
function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase())
    }
    yell()
}