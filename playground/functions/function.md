# Functions
## Built in
- Built in functions are js functions that you can find in a web browsers console without makeing changes to code.
- functions group together a set of statements. 
- when you pass in data in a function that is called an arument. Perform some work which is a statement. sometimes return a value. 
- Math.max is a type of function. Math.max() [would be -infinity since nothing was put in] Math.max(10, 12) {Math.max(10, 12) is a statement, the 10 and 12 within the statements are arguments. use a comma when putting in multiple arguments in a statement}. Sometimes data is passed in a function that like the answer {in the example that data returned would be the value 12 since that is the max number in the function}.
- Another ex Math.floor(2.444) {there is only one argument within the statement which is the 2.444, the data returned would be 2 since that is the lowest number of that argument}.
- There are function statements that are already available in the javascript console without needing to use vscode. Such as the Math.___() and console.log() {console.log logs data within the js console} ex. of console.log('hey') will log the data hey however it would return as undefined. Not all functions are meant to return us any data. 
- parseFloat(20.34324234) will return the same number. parseFloat('20.34324234') The string will again retun as a number. parseInt('20.34324234') will return as the number 20 which is an interger {whole number}. 
- Date.now() does not need an argument it will come back with the amount of milliseconds from apx. January 1st 1970. 
- console p = document.querySelector('p'); console.log('p'); The document.querySelector will search for the variable in the document, which in this case is p. If the paragraph say <p>Hey how ya doin?</p> this will be shown in javascript.
- There are functions called doms which works within the html file.
- When you don't know a variable to put in a certain function you can search online at mozilla developer (mdn). Such as in navigation.vibrate() this is only used for android where a button will make the phone vibrate. 
- The output will be undefined however the scrollTo(x-coord, y-coord) goes to whatever number that is listed. 
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth',})
## custom functions
- functions are grouped together instructions often taking in values(arguments), doing some work and return values to the person that requested it. 
- functions are created, defined and called. Running definition when you make a function and author what it does. Calling a function is when you are running the function. Define function- name of the function
In this example the definition of the function is "function", the name of the function is "calculateBill", {} is the block or body of the function
function calculateBill() {
    [within this block is the function body]
}
- The function calculateBill is for help with calculating a dinner bill (how much, taxes and tip) It will return to us the total. 
- Within a function use a return command to ensure that you recieve called data. A variable that is within a function block such as total, cannot be accesed outside of the block, so you would need to const the variable. const myTotal = calculateBill(); {to log your total use} console.log(`Your total is $${myTotal}`);
- Even though a variable in cancelled out when the funcion block is finished you can use the function block as a variable. ex console.log(`Your Total is $${calculateBill}`); 
## Parameters 
- Parameters are the best way to keep your variables in the functions as most as possible. This way you can change the information for the variables (equation) without adding a new function each time. 
- Ex. function calculateBill (billAmount, taxRate) {
    const total = billAmount * 1 + taxRate; This would be in place of 
    [const total = 100 * 1.13;]
    return total = 
}
- Parameters can be set up in a way the user can put in data for the function and through the equation get there answer. (Adding their own amount and taxrate for the bill)
- Parameters can be known as placeholders and the information being runthrough are called arguments within call or run. Parameters will only work if there are arguments to calculate. 
- function definition cheat sheet moved to wesbos folder (transfer from github not resolved)
- you can pass a function directly using numbers, strings or passed to reference to a variable which holds a variable js will run any version. 
- If nothing is found in the scope {} of the function js will look before the function for a defined variable. ex 
const firstName 'wes';
function sayHiTo() {
    return (`hello ${firstName}`);
}
## console.log 
- is shown in console before user inserts any data. 