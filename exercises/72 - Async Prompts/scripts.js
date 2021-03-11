// in async prompts you can only have one input box and it blocks everything else on the page. 
    const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
    
function ask(options) {
    return new Promise(function(resolve) {
        // First we need to create a popup with all the fields in it
        const popup = document.createElement('form'); 
        popup.classList.add('popup');
        popup.insertAdjacentHTML(
            'afterbegin', `
            <fieldset> 
                <label>${options.title}</label>
            </fieldset>
        `
        );
        // similar to div, they group together for inputs. Fieldsets can be beneficial if you want to disable internal fieldset data.
        // Second, check if they want a cancel button
        if(options.cancel) {
            const skipButton = document.createElement('button');
            skipButton.type = 'button';
            skipButton.textContent = 'Cancel';
            // TODO; listen for a click on that cancel button
        }
        // Third, listen for the submit event on the inputs
        // Fourth, when someone does submit it, resolve the data that was in the input box

        // insert that popup into the DOM
        document.body.appendChild(popup);
        // put a very small timeout before the open class, to give the function a little more time to run in event loop
        setTimeout(function() {
            popup.classList.add('open');
        }, 50);
    });
}
    
