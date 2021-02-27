console.log('null here!');
// eslint-disable-next-line prefer-const
let dog;

console.log(dog);
// If accessed into the console this would be considered undefined. //
dog = 'snickers';
// Adding this will set the variable to a string and will no longer be undefined.
// eslint-disable-next-line no-unused-vars
const disney = 'my name is stitch';

// eslint-disable-next-line no-unused-vars
const cher = {
  first: 'cher',
  last: 'null',
};

const teller = {
  first: 'Raymond',
  last: 'Teller',
};
teller.first = 'Teller';
teller.last = 'null';
