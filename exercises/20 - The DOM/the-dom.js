// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.log(heading.textContent);
// // set the textContent property on that element
// // heading.textContent = 'Wes is cool';
// // console.log(heading.textContent);
// // console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 2`; 
// // A way to add text is to reuse the element and add text. 
// pizzaList.insertAdjacentText('beforeend', ' 2');
// // insertAdjacent text is another. Easier way. 
// console.log(pizzaList.textContent);

// classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);



function toggleRound() {
    pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

// pic.alt ('rando image'); // setter 
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter


window.addEventListener('load', function() { // you can use EventListener on the page or the specific pic. 
    console.log(pic.naturalWidth);
})

// pic.setAttribute('fe-is-cool', 'really random picture');
// console.log(pic.getAttribute('alt')); 

const custom = document.querySelector('.custom');
console.log(custom.dataset)

custom.addEventListener('click', function() {
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
})

