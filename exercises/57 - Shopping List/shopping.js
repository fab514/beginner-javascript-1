// Topics: Custom Events, Event Delegation, local storage, DOM Events, Object Reference

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
// state is a bunch of data that reflects the state of your application. In this it will showing a list of all the items and show the current state of each item. 

const items = [];

function handleSubmit(e) {
    e.preventDefault(); // will stop sll default settings including the item being added to the url when submitted. 
    console.log('submitted!!');
    const name = e.currentTarget.item.value; // the original current target will be reaching the form. In order to reach the input in the form use currentTarget.item (item is the id in meta data)
    // if it is empty do not submit 
    if (!name) return;
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    };
    // Push the items into our state
    items.push(item);
    console.log(`There are now ${items.length} in your state`);
    // clear the form
    e.target.reset(); // Can use target or current target since there is no bubbling that will need current target. Look UP
    displayItems();
}

function displayItems() {
    console.log(items);
    const html = items.map(item => `<li class="shopping-item">
    <input type="checkbox">
    <span class="itemName">${item.name}</span> 
    <button aria-label="Remove ${item.name}">&times;</button>
    </li>`).join('');
    list.innerHTML = html; // this will add the items to the list in the DOM
    // reminder that span is a container that is a inline element used to mark up a part of a document. 
    // aria label will allow people who are using readers to hear the item they will be marking or removing. 
}

// whenever you want an event to listen for a submit you do not need to use event click etc. 
shoppingForm.addEventListener('submit', handleSubmit);