const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
console.log(heading.textContent);
// set the textContent property on that element
// heading.textContent = 'Wes is cool';
// console.log(heading.textContent);
console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 2`; 
// A way to add text is to reuse the element and add text. 
pizzaList.insertAdjacentText('beforeend', ' 2');
// insertAdjacent text is another. Easier way. 
console.log(pizzaList.textContent);