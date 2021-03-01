# closures
- Even if we have finished using a function or a function within a function once this would not mean the function is garbage. You can access the function again multiple times and in different ways later in your code. 
- The inner function can only be accessed if we feed the outer function through.
- Closures are a way for the child functions can run the parent functions with the parent function is run again. 
```js
         function outer() {
          const outerVar = 'Hey I am the outer Var!'; // variable assigned
          function inner() {
            const innerVar = 'Hey I am an inner Var'; // variable assigned
            console.log(innerVar); // function scope used within it's own scope first for declared variable.
            console.log(outerVar); // scope lookout reaches up to parent function for declared variable.
          }
          return inner; // return with the innerfunction
        }
        const innerFn = outer(); // outer function is assigned to innerFn varible.
        innerFn(); // innerFn variable is used. Code is ran. 
```
- Only parent functions can be accessed outside of the function scope. You can access the function createGreeting however not any inner functions within createGreeting. 
```js
function createGreeting(greeting = '') {
          const myGreet = greeting.toUpperCase();
          return function (name) {
            return `${myGreet} ${name}`;
          };
        }
        // Able to use the function createGreeting within more then one variable. This function was used to capitalize the greetings.
        const sayHello = createGreeting('hello');
        const sayHi = createGreeting('hi!');
        console.log(sayHello('felicia'));
        console.log(sayHello('andrew'));
        console.log(sayHi('houdini'));
        console.log(sayHi('ducky'));
```
## Using closures to create private variables. 
```js
        function createGame(gameName) { // parent function
          let score = 0; // variable  within parent function
          return function win() { // child function
            score++; // score number was taken from parent variable. ++ means to add to the value number each time the variable is used. 
            return `Your name ${gameName} score is ${score}`;
          };
        }
        const hockeyGame = createGame('hockey'); // the hockeyGame variable was able to pull the parent and child variable. Return would be 'Your name hockey score is 1'
        const soccerGame = createGame('soccer'); // this different variable was able to use the createGame function
        hockeyGame(); 
        soccerGame();