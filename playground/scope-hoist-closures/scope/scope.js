/* eslint-disable */
// const first = 'felicia';
// let second = 'brenner';
// var age = '100';

// function go() {
//     const myAge = 200; // Use a different name for variables that are similar. 
//     const hair = 'brown';
//     console.log(age);
//     console.log(myAge);
//     console.log(hair);
// }

// function isCool(name) {
//     let cool;
//     if (name === 'felicia') {
//         cool = true;
//     }
//     console.log(cool);
//     return cool;
// }
// // In the video Wes switched var to let to make it block scoped instead of function scoped. 
// // i = equal to 0; i < less then 10; i++ not learned. 
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
// When inserting logDog in console it will show as snickers
// const dog = 'snickers';

// function logDog() {
//     console.log(dog);
// }

// function go() {
//     const dog = 'sunny';
//     logDog();
// }

// go();
// When inserting logDog this will show as Rufus
const dog = 'snickers';

function logDog(dog) {
    console.log(dog);
}

function go() {
    const dog = 'sunny';
    logDog('Rufus'); // the name Rufus was put in as an (argument) 
    // Remember an argument is more specific so it will override other logDog
}

go();