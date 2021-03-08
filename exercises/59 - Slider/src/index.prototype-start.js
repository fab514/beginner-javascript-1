function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }
    // do not need to add properties outside because you can add them at anytime. 
    
    
    // change the variables and possibly the query selector to this: this.slides and this.slider.querySelector() 
    this.slides = slider.querySelector('.slides');
    this.slider = slider; // if we are passing in slider in line 1 we need to call for the query selector later. 
    const prevButton = slider.querySelector('.goToPrev'); // we don't need these outside of the constructor so they will stay variables.
    const nextButton = slider.querySelector('.goToNext');
    
    // when this slider is created, run the start slider function
    this.startSlider();
    this.applyClasses();
   
    // Keep event listeners in the Slider function's scope. 
    // Event listeners
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move()); // the arrow function will be boud instead of the this.move
    
}
 // Take all below functions outside of the Slider function
    // put this. in front to make properties.
    // Put the main function name in this case Slider.prototype.name = function()

    Slider.prototype.startSlider = function() {
        this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
        this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
        this.next = this.current.nextElementSibling || this.slides.firstElementChild;
    }

    Slider.prototype.applyClasses = function() {
        this.current.classList.add('current');
        this.prev.classList.add('prev');
        this.next.classList.add('next');
    }

    Slider.prototype.move = function(direction) {
        // first strip all the classes of the current slide
        const classesToRemove = ['prev', 'current', 'next']; // classes to remove should be variable
        this.prev.classList.remove(...classesToRemove);
        this.current.classList.remove(...classesToRemove);
        this.next.classList.remove(...classesToRemove);
        if(direction === 'back') {
            // make a new array of the new values, and destructure them over and into the prev, current and next variables 
            [this.prev, this.current, this.next] = [
                // get the prev slide, if there is none, get the last slide from the entire slider wrapping
                this.prev.previousElementSibling || this.slides.lastElementChild,
                this.prev, 
                this.current,
            ];
        } else {
            [this.prev, this.current, this.next] = [
                this.current, 
                this.next, 
                // get the next slide, or if it's at the end, loop around and grab the first
                this.next.nextElementSibling || this.slides.firstElementChild,
            ];
        }
        
        this.applyClasses();
    }
    

// keep const here but change to new Slider
const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

window.dogSlider = dogSlider; // you can't dog-slider with the parcel so add it to the window. 

// This is a way other developers can add to your code within the window.
window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowRight') {
    dogSlider.move();
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
