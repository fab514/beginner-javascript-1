const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick() {
    console.log('Ya Clicked It!');
}

cardButtons.forEach(button => 
    button.addEventListener('click', 
    handleCardButtonClick)
    );