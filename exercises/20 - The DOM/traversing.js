const wes = document.querySelector('.wes');

// Will only show the em tag (or any added tag) within the wes element
// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);
// // Will show each node inside the wes element. Text, EM, Text
// //<p class="wes">I am Wes, I <em>love</em>to bbq</p>
// console.log(wes.childNodes);

// Can a created JS element also be removed?
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);