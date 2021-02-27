# Variables

## JavaScript includes variables which hold the data value and it can be changed anytime. JavaScript uses reserved keyword var to declare a variable. A variable must have a unique name. You can assign a value to a variable using equal to (=) operator when you declare it or before using it.

## Types of Variables
- var, let and const. Coders prefer not to use var because of scoping. var can reach out a function scope when let and const only use block scoping. 
- Var is considered function scoped, let and const are considered block scoped. 
```js
var first = 'felicia'; // Words like 'felicia' are considered a string and should be surrounded by paranthasis. 
let age = 300; // A number should not be suroounded by a string. 
const cool = true; // True or False statements are a boolean and should not be surrounded by a string. 
```
- Use const when you do not want the variable to change. Use let when you need to change your variable throughout code. Not all coders use var for declaring variables to keep variable contained in block scope. 
- When using let and var you can change the variable later in the code or from your console. If you use const for your variable you can not change it in either the in code or the console. 
- You can change var and let but only declare the same name once. In the example we declare the same name twice. Try changing a similar name to something different. Such as age and myAge.
```js
let age = 300;
var age = 200;
```
## console
- How you can check your variables in the console. You can type in the declared variable such as age and it will come up with "300". If you use let or var in your code you can change the variable in console age = '300' and the new return will be "300"
```js
var first 'felicia';
let age = 300;
const cool = true
```
## Strict
- Uaing the code 'use strict' will give an error in the console to any variables that are not coded correctly. Such as not declaring the variable. Strict is not a good practice. Don't use strict. 
## Semicolons
- Shows the end of a statement. 
- Java Script Block only put semicolen at the end of statents within block. Notice in example of a block each statement ends with a semicolon.
- if statements, function definitions and loops do not need semicolons for they are not statements. You're running some code and telling the computer what to do inside of the curly brackets. 

## if statements The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed. 
- If/Else statements will be covered later in the course. 
```js
 if (age > 10) { // if statement do not use semicolon
       console.log('You Are Old'); // statements within the if statement block. 
     }
     const best = 'you are'; // most variable names start lowercase
     const iLovePizza = 'yum'; // this uses camel case
     const YouAreGreat = 'true'; // uses upper camel case- mostly used for naming class
     const i_am_snake = 'hiss'; // snake case using _ $  is ok when naming
```
## Lettering in js
- Four types of lettering lowercase- used for variables, camel case-used for naming functions, upper camel case- used for naming class, snake case- uses _ and $ 