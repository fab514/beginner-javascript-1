function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery Found!');
    }

    this.gallery = gallery;

    /*
    A way to surface a variable on an instance is this.name
    You can get rid of the const because we are no longer declaring a variable we are setting a 
    property on the gallery instance. 
    select the element we need
    */

    this.images = Array.from(gallery.querySelectorAll('img'));
    this.modal = document.querySelector('.modal');  
    this.prevButton = this.modal.querySelector('.prev');
    this.nextButton = this.modal.querySelector('.next');

    
    // These are our event listeners!
    // for events you need to match the name event = event or e = e
    this.images.forEach(image => image.addEventListener('click', e => this.showImage
    (e.currentTarget))
    );

    // loop over each image
    this.images.forEach(image => {
        // attach event listener to each image
        image.addEventListener('keyup', e => {
            // when that is keyup'd check if it was enter
            if(e.key === 'Enter') {
                // if it was enter, show that image
                this.showImage(e.currentTarget);
            }
        });
    });

    this.modal.addEventListener('click', this.handleClickOutside);
    
}

Gallery.prototype.openModal = function() {
    console.info('Opening Modal...');
    // First check if the modal is already open
    if (this.modal.matches('.open')) { 
        console.info('Modal already open');
        return; // stop the function from running
    }
    this.modal.classList.add('open'); // if there is not already a css class match running: this will add a class of 'open'

    // Event listeners to be bound when we open the modal
    window.addEventListener('keyup', this.handleKeyUp);
    this.nextButton.addEventListener('click', this.showNextImage);
    this.prevButton.addEventListener('click', this.showPrevImage);
}

Gallery.prototype.closeModal = function() {
    console.info('Closing Modal...');
    this.modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard.
    // Event listeners boud to when we close the modal
    window.addEventListener('keyup', this.handleKeyUp);
    this.nextButton.addEventListener('click', this.showNextImage);
    this.prevButton.removeEventListener('click', this.showPrevImage);
}

Gallery.prototype.handleClickOutside = function(e) {
    if(e.target === e.currentTarget) {
        this.closeModal();
    }
}

Gallery.prototype.handleKeyUp = function(e) {
    if (e.key === 'Escape') return this.closeModal(); // Use return to stop the function to continue to run if closeModal has been used. This will save unnecessary data use. 
    if (e.key ===  'ArrowRight') return this.showNextImage();
    if (e.key === 'ArrowLeft') return this.showPrevImage();
}

Gallery.prototype.showNextImage = function() {
    this.showImage(this.currentImage.nextElementSibling ||
    this.gallery.firstElementChild);
}

Gallery.prototype.showPrevImage = function() {
    this.showImage(this.currentImage.previousElementSibling ||
    this.gallery.lastElementChild);
}

Gallery.prototype.showImage = function(el) { // el image element
    if(!el) {
        console.info('no image to show');
        return;
    }
    // update the modal with this info
    console.log(el);
    this.modal.querySelector('img').src = el.src; // The src is coming from the html meta data
    this.modal.querySelector('h2').textContent = el.title; // title is coming from the html meta data
    this.modal.querySelector('figure p').textContent = 
    this.el.dataset.description;
    this.currentImage = el;
    this.openModal();
}
// Allow to use the same functions by using closure. You can still access a function after it has been run. 

// Use it on the page

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);