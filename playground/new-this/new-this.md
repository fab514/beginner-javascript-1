# New-this
- new-this terms with object oriented programming
- instanceof is a comparison operator that will check whether an instance is a specified type 
- when adding new to any of our types it turns the type into an object that you can use different prototypes on.

- Making a string into an object using new keyword. This string object has access to methods. 
- There are built in methods and methods you can add. Never modify built in methods. 

```js
const middle = 'slam dunk'
// will return as only a string
const large = new String('hey ya')
// you can use different methods on this string. 


```

    <button class="one">Button 1</button>
    <button class="two">Button 2</button>

  ```js


    const myDate = new Date('August 11, 2025'); // Date does not have it's own literal syntax so the new keyword must be added
    console.dir(myDate);
    console.log(myDate.getFullYear());

    // As a literal syntax brackets show if someting will be an array or object. 
    const names = new Array('wes', 'kait');
    // const names = ['wes', 'kait'];
    const wes = new Object({name: 'wes'});
    // const wes = {name: 'wes'};
    const span = document.createElement('span'); // You do not need to put new in front of document.createElement because using document or creating other kind of html will be considered new. 

    function Pizza(toppings = [], customer) {
      console.log('Making a pizza');
      // Save the toppings that were passed in, to this instance of the pizza
      // in order to attach properties by adding this keyword to make all instance properties. Each pizza will have their own property.  
      this.toppings = toppings;
      this.customer = customer;
      this.id = Math.floor(Math.random() * 16777215).toString(16); // website Wes uses to find a random code is 'Random Hex Color Code' 
      this.slices = 10;

      // EACH PIZZA IN THE FILE WILL HAVE THERE OWN COPY OF THE FUNCTION WHICH CAN SLOW DOWN THE WEBSITE. MOVE THE FUNCTION TO THE PROTOTYPE.
      // this.eat = function() {
      //   if(this.slices > 0) {
      //    this.slices = this.slices - 1; 
      //    console.log(`CHOMP you now have ${this.slices} left!`)
      //    return this.slices;
      //   } else {
      //     console.log(`Sorry! No slices left`);
      //   } 
      // }
    }

    // prototype look up will let the child elements within the parent Pizza to have access to the function on the prototype. 
    // It will search within the scope first before looking outside. 
    Pizza.prototype.eat = function() {
        if(this.slices > 0) {
         this.slices = this.slices - 1; 
         console.log(`CHOMP you now have ${this.slices} left!`)
         return this.slices;
        } else {
          console.log(`Sorry! No slices left`);
        }  
    }
      
    

    /*
    // You can put new in front of a function, such as the Pizza function you will make it into an object with an instance of the function you made it from. 
    const pepperoniPizza = new Pizza();
    console.log(pepperoniPizza);
    console.log(pepperoniPizza.constructor); // .constructor will show what function made pepperoniPizza
    // span.constructor will show that the span was created from a HTML span function
    */
    // taking a function and adding a new keyword will return an object that is an instance of that object. 
   const pepperoniPizza = new Pizza(['pepperoni'], 'Wes Bos');
   const canadianPizza = new Pizza(['pepperoni', 'mushrooms', 'onion'], 'Kait Bos'); 
   // this is used for storing internal data and functionality on each of the instances. 
   
    /*
    When a declare function is inside of another function the this keyword inside 
    will not show the outside function. In order to be able to access the outside 
    function use an arrow function instead. 
    
    const button1 = document.querySelector('.one');
    const button2 = document.querySelector('.two');

    function tellMeAboutTheButton() {
      console.log('outside', this);
      setTimeout(() => {
        console.log('inside', this);
        this.textContent = 'You Clicked Me';
      }, 1000);
    }

    const tellMeAboutThisButton = () => {
      console.log(this);
    }
    button1.addEventListener('click', tellMeAboutTheButton);
    button2.addEventListener('click', tellMeAboutTheButton);
    */

    ```


    - With an arrow function the this keyword does not change and it will show the 
    higher level function, with no function it will come back as window.
  
    - this is the instance of an object where a function is found. The thing to 
    the left of the dot (.) before a method. 
  
    - The this for the function tellMeAboutThisButton would be button1 or button2 
    depending on the button that is clicked. We can call this an instance now. 
    
    - With this the function is bound to the button
    

