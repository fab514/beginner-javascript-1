// in async prompts you can only have one input box and it blocks everything else on the page. 

// async and await keywords enable asynchonous, promise-based behavior for promise chains to be written in a cleaner style. This avoids need of explicitly configure promise chains (promise nesting)
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

async function destroyPopup(popup) { 
    popup.classList.remove('open'); // remove 'open' class from the classlist.
    await wait(1000);
    // remove popup from the dom: it is not removed from js memory
    popup.remove();
    /* eslint-disable no-param-reassign */
    popup = null;
    /* eslint-enable no-param-reassign */
}

function ask(options) {
    return new Promise(async function(resolve) {
        // First we need to create a popup with all the fields in it
        // async put in the parent function of 'await' not the ask function
        const popup = document.createElement('form'); 
        popup.classList.add('popup');
        popup.insertAdjacentHTML(
            'afterbegin', // after opening tag of form (popup)

            `<fieldset> 
                <label>${options.title}</label>
                <input type="text" name="input"/>
                <button type="submit">Submit</button>
            </fieldset>
        `
        );
        // similar to div, they group together for inputs. Fieldsets can be beneficial if you want to disable internal fieldset data.
        // Second, check if they want a cancel button
        if(options.cancel) {
            const skipButton = document.createElement('button');
            skipButton.type = 'button';
            skipButton.textContent = 'Cancel';
            console.log(popup.firstChild);
            popup.firstElementChild.appendChild(skipButton);

            // TODO; listen for a click on that cancel button
            skipButton.addEventListener(
                'click', 
                function() {
                    resolve(null); // explicently nothing
                    destroyPopup(popup);
                },
                { once: true } // only listened to once
            );
        }
        // Third, listen for the submit event on the inputs
        popup.addEventListener(
            'submit', 
            function(e) {
            e.preventDefault();
            console.log('SUBMITTED!');
            resolve(e.target.input.value);
            // remove it from the dom entirely
            destroyPopup(popup);
            }, 
            { once: true } // once the eventListener has been called and used it removes itself.
        );

        // Fourth, when someone does submit it, resolve the data that was in the input box
        // insert that popup into the DOM
        document.body.appendChild(popup);
        // put a very small timeout before the open class, to give the function a little more time to run in event loop
        await wait(50);
        popup.classList.add('open');
        }); // puts at end of event loop
}

// select all buttons that have a question
async function askQuestion(e) {
    const button = e.currentTarget;
    const cancel = button.hasAttribute('data-cancel'); 
    
    const answer = await ask({ 
        title: button.dataset.question, cancel: true });
        cancel,
    console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
    { title: 'What is your name?' },
    { title: 'What is your age?' },
    { title: 'What is your dogs name?' },
];

/*
Promise.all(questions.map(ask)).then(data => { // ask makes the map array a promise which is wrapped with a new promise.all that listens with a 'then' return data
    console.log(data); // log an array of data
}); // array of the three sequential promises in order. 
*/

async function asyncMap(array, callback) { // can be used multiple times. flexible to many different arrays
    // make an array to store results
    const results = [];
    // loop over our array
    for (const item of array) {
        results.push(await callback(item));
    }
    // when done with the loop return it
    return results;
}

async function go() {
    const answers = await asyncMap(questions, ask);
    console.log(answers);
}

go()

/*
async function askMany() { // use 'for 'of' loop 
    for (const question of questions) { // 'for' 'of' allows you to pause a loop for await inside of it
        const answer = await ask(question);
        console.log(answer);
    }
}

askMany();
*/
