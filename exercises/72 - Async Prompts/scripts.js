// in async prompts you can only have one input box and it blocks everything else on the page. 
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

async function destroyPopup(popup) { 
    popup.classList.remove('open');
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
        const popup = document.createElement('form'); 
        popup.classList.add('popup');
        popup.insertAdjacentHTML(
            'afterbegin', 

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
        }
        // Third, listen for the submit event on the inputs
        popup.addEventListener(
            'submit', 
            function(e) {
            e.preventDefault();
            console.log('SUBMITTED!');
            resolve(e.target.input.value)
            // remove it from the dom entirely
            destroyPopup(popup);
            }, 
            { once: true } // will make it work once after submitting a certain text
        );
        // Fourth, when someone does submit it, resolve the data that was in the input box

        // insert that popup into the DOM
        document.body.appendChild(popup);
        // put a very small timeout before the open class, to give the function a little more time to run in event loop
        await wait(50);
        popup.classList.add('open');
        }); // puts at end of event loop
}
    
