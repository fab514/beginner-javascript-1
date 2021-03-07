function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }
    // change the variables to this.name
    let prev; 
    let current;
    let next;
    // change the variables and possibly the query selector to this: this.slides and this.slider.querySelector()
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    // Take all below functions outside of the Slider function
    // put this. in front to make properties.
    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log({ current, prev, next });
    }

    function applyClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function move(direction) {
        // first strip all the classes of the current slide
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        if(direction === 'back') {
            // make a new array of the new values, and destructure them over and into the prev, current and next variables 
            [prev, current, next] = [
                // get the prev slide, if there is none, get the last slide from the entire slider wrapping
                prev.previousElementSibling || slides.lastElementChild,
                prev, 
                current,
            ];
        } else {
            [prev, current, next] = [
                current, 
                next, 
                // get the next slide, or if it's at the end, loop around and grab the first
                next.nextElementSibling || slides.firstElementChild,
            ];
        }
        
        applyClasses();
    }
    
    // when this slider is created, run the start slider function
    startSlider();
    applyClasses();

    // Keep event listeners in the Slider function's scope. 
    // Event listeners
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move); // move will move forward by default
    
}

// keep const here but change to new Slider
const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
