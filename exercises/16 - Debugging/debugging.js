const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});
// people.forEach((person, index) => {
//   if (person.name === 'Wes') {
//     console.error('dumb name');
//   }
// });
// people.forEach((person, index) => {
//   console.groupCollapsed(`${person.name}`);
//   console.log(person.country);
//   console.log(person.cool);
//   console.log(`Done!!`);
//   console.groupEnd(`${person.name}`);
// });

// console.table(people);

// Console Methods

// Callstack, Stack trace

// Grabbing Elements

// Breakpoints, debugger

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

// function doALotOfStuff() {
//   console.group('Doing Some Stuff');
//   console.log('I am the one.');
//   console.warn('Watch Out!!');
//   console.error('Hey!');
//   console.groupEnd('Doing Some Stuff');
// }
// function doctorize(name) {
//   // console.count('running doctorize');
//   return `Dr. ${name}`;
// }
function doctorize(name) {
  //   console.count(`running doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  // eslint-disable-next-line no-undef
  doesntExist(); // Will be an error
  return `Hello ${name}`;
}
// Order within each function go-doctorize-greet-doesn't exist.
// With this doesn't exist go function will cause an error.
function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}
// eslint-disable-next-line no-unused-vars
function bootstrap() {
  console.log('Starting the App!');
  go();
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}