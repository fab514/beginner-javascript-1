function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }
    // change the variables to this.name
    this.prev; 
    this.current;
    this.next;
    // change the variables and possibly the query selector to this: this.slides and this.slider.querySelector() 
    this.slides = this.slider.querySelector('.slides');
    this.prevButton = this.slider.querySelector('.goToPrev');
    this.nextButton = this.slider.querySelector('.goToNext');

   
    // Keep event listeners in the Slider function's scope. 
    // Event listeners
    this.prevButton.addEventListener('click', () => move('back'));
    this.nextButton.addEventListener('click', move); // move will move forward by default
    
}
 // Take all below functions outside of the Slider function
    // put this. in front to make properties.
    function startSlider() {
        this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
        this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
        this.next = this.current.nextElementSibling || this.slides.firstElementChild;
        console.log({ current, prev, next });
    }

    function applyClasses() {
        this.current.classList.add('current');
        this.prev.classList.add('prev');
        this.next.classList.add('next');
    }

    function move(direction) {
        // first strip all the classes of the current slide
        this.classesToRemove = ['prev', 'current', 'next'];
        this.prev.classList.remove(...classesToRemove);
        this.current.classList.remove(...classesToRemove);
        this.next.classList.remove(...classesToRemove);
        if(direction === 'back') {
            // make a new array of the new values, and destructure them over and into the prev, current and next variables 
            [prev, current, next] = [
                // get the prev slide, if there is none, get the last slide from the entire slider wrapping
                this.prev.previousElementSibling || this.slides.lastElementChild,
                this.prev, 
                this.current,
            ];
        } else {
            [prev, current, next] = [
                this.current, 
                this.next, 
                // get the next slide, or if it's at the end, loop around and grab the first
                this.next.nextElementSibling || this.slides.firstElementChild,
            ];
        }
        
        this.applyClasses();
    }
    
    // when this slider is created, run the start slider function
    startSlider();
    applyClasses();

// keep const here but change to new Slider
const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
