# If Statements

<script>
    // If the original if statement is true, all of the else if statements will be skipped. 
    // If you are looking to search each of the true statements you need make 3 seperate if statements. 
    // If the first if statement is false the code will go to the else if statement. 
    if (10 > 2) {
      console.log('Yep 1');
    } else if (11 > 10) {
      console.log('Yep 2');
    } else if (3 > 1) {
      console.log('Yep 3');
    }
    // Seperate if statements will all run if true. 
    if (10 > 2) {
      console.log('Yep 1');
    } 
    if (11 > 10) {
      console.log('Yep 2');
    } 
    if (3 > 1) {
      console.log('Yep 3');
    }

    // If there is multiple statements that could be true be carefule of the order you put in. 
    const age = 50;
    if (age > 70) {
      console.log('In your seventies');
    } else if (age > 60) {
      console.log('In Your sixties');
    } else if (age > 50) {
      console.log('In your fifties');
    } else {
      console.log('Nothing was true');
    }

    // function takes in a sentence, boolean-true or false statement.

    // Regex- a regular expression used to match characters in some text. They are located in between backslashes. The \s means space in text and the outside g means global. /\s/g
    // In this case in a lower case sentence the spaces will be replaced by dashes '-'.
    // If you run both arguments in the console such as Slugify('Andrew is cool', true) it will return as andrew-is-cool

    // You can have an if statement inside of a function you can return that is and can stop the function from running. 
    function slugify(sentence, lowercase) {
      if (lowercase) {
        return sentence.replace(/\s/g, '-').toLowerCase();
      } else {
        return sentence.replace(/\s/g,'-');
      }

    }
  </script>

  ## Operators

- A single equal = will come as an error for it is used to set the value to a variable. It will show an error if you try to put it against a const variable. It is not used to equal anything. 
- A double equal == Is used to see if each value equals each other. It however does not decipher types such as, numbers or strings. 50 == 50 or 50 = '50' will both come up as true. Double equals can reach for checking variables that are null or undefined. 
- A triple equal === Is used to see if each value equals each other. It does decipher between types. 50 === 50 would be true, 50 === '50' will return as false. It is best to use triple equal for this reason. 
- greater then > greater then or equal to >= less then < less then or equal to <=
- or symbol || will be true if any of the statements in the variable is true.
- and symbol && with and symbols if there is any false statements in the variable will make the entire variable will become false. 

```js
const name = 'felicia';
    

  if (name === 'felicia' || name === 'wes') {
    console.log('Coool Name!');
  }

  const name = 'felicia';
    const last = 'brenner'
    

  if (name === 'felicia' && last === 'brenner') {
    console.log('Coool Name!');
  }
  if (name === 'felicia' && last === 'brenner') {
    console.log('Coool Name!');
  }
```

## Truthy or Falsie

  * empty array
  <!-- Empty array will be truthie but you can find the inside using length. let score = [] ; score.length will come up as 0 when ran and if it is ran again it will come up as falsie.  -->
  * empty object

  <!-- An empty object {} will start as truthy however if you put Object.keys({}) it will show an empty array Object.keys({}).length will come back as 0 which is falsie.  -->
  <!-- Object.keys({name: 'wes'}) will show name property, Object.keys({name: 'wes'}).length will come back as 1 because of the 1 name property. Making this truthie.  -->

  <h2>Truthy Values</h2>
  <!-- These equate to true -->
  * 1
  * -10
  * array with numbers
  * full string
  * a string of "0"
  <!-- All strings besides a string of nothing is truthy -->

  <h2>Falsy Values</h2>
  <!-- These equate to false -->
  * 0 
  * undefined variable
  * Variable set to null
  * a variable set to `"hello" - 10` NaN <!-- NaN not a number -->
  * empty string
```js

let score []; // empty array will first come up as truthie then when matched with .length, because of the 0 it will come up as falsie. 

if (score.length) {
  console.log('There is a score already');
} else {
  console.log('No Score Yet!')
}
```
## Bang !== Does not equal to

const name = 'felicia'
name === 'felicia' is true
name === 'keith' is false
name !== 'keith' is true. (name is not keith)

## Coercion will change something of a different- such as a string or a number- and turn it into a real boolean.
- Using !bang with coercion. The bang turned the string into a booleon.
name 
'wes'
!name 
false
!!name
true
- A single bang will coerce the string into a boolean but make it opposite (not something). 
- A double bang !! will coerce the sting into a boolean however it will stay original. 
