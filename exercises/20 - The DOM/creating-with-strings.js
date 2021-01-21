const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
        <h2>Cute ${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;

// turn a string into a DOM element 
const myFragment = document.createRange()
.createContextualFragment(myHTML);

// We want to append the fragment(element) not the string
document.body.appendChild(myFragment);
