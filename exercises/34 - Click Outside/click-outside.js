const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card'); // closest method to search for the closest card to the button. 
    // Grab the image src
    const imgSrc = card.querySelector('img').src; // shows image source
    const desc = card.dataset.description; // show data-set (metadata) in each card.
    const name = card.querySelector('h2').textContent;
    // populate the modal with the new information. 
    modalInner.innerHTML = ` 
    <img width="600" height "600" src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
    `;
    // show the model
    modalOuter.classList.add('open');
}

cardButtons.forEach(button => 
    button.addEventListener('click', 
    handleCardButtonClick)
    );

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest // ! creates a boolean true-outside target/false-on target. 
    ('.modal-inner');
    if (isOutside) {
        closeModal();  
    }
});

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
    }
})