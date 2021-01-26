const wes = document.querySelector('.wes');

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

signupForm.addEventListener('submit', function(event) { // add event listener to signupForm element
    event.preventDefault(); 
    const name = event.currentTarget.name.value;
    if(name.includes('Chad')) { // case sensitive
        alert('Sorry bro'); // Any name beside Chad will be able to do the event. 
        event.preventDefault();
    }
});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'