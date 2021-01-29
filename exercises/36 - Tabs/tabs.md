# Tabs
## Tabs shown in HTML
```html
  <div class="wrapper">
    <div class="tabs">
        <!-- Make the tabs accessible. The role is showing the browser that the div is a tablist. Then the seperate tabs have a role of tabs. label just a programming language. -->
      <div role="tablist" aria-label="Programming Languages">
          <!-- aria-selected show if the button is currently active.  -->
        <button role="tab" aria-selected="true" id="js">
          JavaScript
        </button>
        <button role="tab" aria-selected="false" id="ruby">Ruby
        </button>
        <button role="tab" aria-selected="false" id="php">
          PHP
        </button>
      </div>
      <!-- Only descriptions good markup of the browser.  -->
      <div role="tabpanel" aria-labelledby="js">
        <p>JavaScript is great!</p>
      </div>
      <div role="tabpanel" aria-labelledby="ruby" hidden>
        <p>Ruby is great</p>
      </div>
      <div role="tabpanel" aria-labelledby="php" hidden>
        <p>PHP is great!</p>
      </div>
    </div>
  </div>
  ```
  ## Making that you can select the buttons. 
  ```js
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// searches for all the tabs instead of within the document. Good for reusing the JS file 
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    console.log(event.currentTarget); // Will show that you clicked a button and shows data in console <button id="js" role="tab" aria-selected="true">
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
    
```
## Using aria-selected
```js
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// searches for all the tabs instead of within the document. Good for reusing the JS file 
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    // Hide all tab panels. Easier to start with hiding them all as the first step. 
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // Mark all tabs as unselected
    tabs.forEach(tab => {
        // tab.ariaSelected = false; // if you are trying to access something originally with a - attribute which will break the code aria-selected; You can access it using camel case instead. ariaSelected
        // however, when trying to set aria-selected or custom properties it will not update using the above method. Use the .set attribute method below.  
        tab.setAttribute('aria-selected', false);
    });
    // Marck the clicked tab as selected
    // Find the associated tabPanel and show it!
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));