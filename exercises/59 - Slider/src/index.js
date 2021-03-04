function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }
    // create some variables for working with the slider
    let current; // good to name the variables inside the closure and update later so multiple functions can access it
    let prev; 
    let next;
    // select the elements needed for the slider
    const slides = slider.querySelector('.slides');
    const prevButton = document.querySelector('.goToPrev');
    const nextButton = document.querySelector('.goToNext');

    // for different between nextElementChild or nextChild is that bext child will go to the next child whether it be a node or an element. A element Child will go to the next element
    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log({current, prev, next});
    }

    function applyClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function move(direction) {
        // first strip all the classes of the current slide
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove('prev', 'current', 'next');
        current.classList.remove('prev', 'current', 'next');
        next.classList.remove('prev', 'current', 'next');
    }

    // when this slider is created, run the start slider function
    startSlider();
    applyClasses();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
