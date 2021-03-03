function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery Found!');
    }

    // select the element we need
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal'); // Reminder that a modal is a dialogue box or pop up window. In this case shows up when you click a picture to make it bigger. 
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage;

    function openModal() {
        console.info('Opening Modal...');
        // First check if the modal is already open
        if (modal.matches('.open')) { // matches with a css class that is already running
            console.info('Modal already open');
            return; // stop the fuction from running
        }
        modal.classList.add('open'); // if there is not already a css class match running: this will add a class of 'open'
    }

    function closeModal() {
        console.info('Closing Modal...');
        modal.classList.remove('open');
        // TODO: add event listeners for clicks and keyboard..
    }

    function handleClickOutside(e) {
        if(e.target === e.currentTarget) {
            closeModal();
        }
    }

    function handleKeyUp(e) {
        if (e.key === 'Escape') closeModal();
    }

    function showImage(el) { // el image element
        if(!el) {
            console.info('no image to show');
            return;
        }
        // update the modal with this info
        console.log(el);
        modal.querySelector('img').src = el.src; // The src is coming from the html meta data
        modal.querySelector('h2').textContent = el.title; // title is coming from the html meta data
        modal.querySelector('figure p').textContent = 
        el.dataset.description;
        currentImage = el;
        openModal();
    }
    // These are our event listeners!
    // for events you need to match the name event = event or e = e
    images.forEach(image => image.addEventListener('click', e => showImage
    (e.currentTarget))
    );

    modal.addEventListener('click', handleClickOutside);
    window.addEventListener('keyup', handleKeyUp);
}
// Allow to use the same functions by using closure. You can still access a function after it has been run. 

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));