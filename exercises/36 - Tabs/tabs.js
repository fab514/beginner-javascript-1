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
    // If you can use aria over class. 
    tabButtons.forEach(tab => {
        // tab.ariaSelected = false;  
        tab.setAttribute('aria-selected', false);
    });
    // Mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    // Find the associated tabPanel and show it!
    const { id } = event.currentTarget;
    const tabPanel = tabs.querySelector(`
    [aria-labeledby="ruby"]`);
    console.log(tabPanel);
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
    
