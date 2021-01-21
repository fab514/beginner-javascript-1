const wes = document.querySelector('.wes');

// Will only show the em tag (or any added tag) within the wes element
console.log(wes.children);
// Will show each node inside the wes element. Text, EM, Text
//<p class="wes">I am Wes, I <em>love</em>to bbq</p>
console.log(wes.childNodes);
// stopped at 2:57