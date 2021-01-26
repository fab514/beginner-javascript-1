# Forms

## persist logs
- When You are navigating using a link you can still show logs from the original page. You do this by going to the gear (cog) symbol and check the persist log box. The navigated page will show what you clicked on, where you navigated to and any warning between the original page and the navigated one.
```js
const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
    // the following will give a confirmation window with a message and requirement for user to confirm or cancel.
    event.preventDefault(); // prevents the event on the function, this case navigating link to the website
    console.log('You clicked it!');
    const shouldChangePage = confirm(
        'This site might be malicious!, do you wish to proceed?'
    );
    if (shouldChangePage) {
        window.location = event.currentTarget.href;
    } // this will change the page if the user clicks confirm.
    console.log(shouldChangePage);
    
});
// Another way to do this is to use the ! or not symbol if the event is prevented.
wes.addEventListener('click', function(event) {
    // the following will give a confirmation window with a message and requirement for user to confirm or cancel.
   
    console.log('You clicked it!');
    const shouldChangePage = confirm(
        'This site might be malicious!, do you wish to proceed?'
    );
    if (!shouldChangePage) { // ! mean to not do the function.
        event.preventDefault(); // prevents the event on the function, this case navigating link to the website
    }
});

const signupForm = document.querySelector('[name="signup"]'); // calling name='signup'

```
## Grabbing information using values
- Below is a way to collect information from the user. 
```js

signupForm.addEventListener('submit', function(event) { // add event listener to signupForm element
    console.log(event);
    event.preventDefault(); // Prevent event.
    // These all have proper names by useing HTML values. It is better to call the names instead of using .querySelector for grabbing certain form information.
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked);
});
```
## Stages of the keys being pressed. 
```js
function logEvent(event) {
    console.log(event.type); 
    console.log(event.currentTarget.value); // name of the event and what the user typed in. 
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
'keyup' // key is released
'keydown' // Key is on it's way down
'keypress' // while the key is being pressed.  
'focus' //An element receives the focus when the user either clicks on it or uses the Tab key on the keyboard.
'blur' //The moment of losing the focus (“blur”) can be even more important. That’s when a user clicks somewhere else or presses Tab to go to the next form field, or there are other means as well.
```

## Accessibilty
- making a website accessible for everyone. Especially people with vision problem.
- Common mistake using an <a href> tag for a button. <a> tags are used to leave the website and buttons are used to insert information.