const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) { // with random numbers it is hard to test because teh result will always be different
   // passing a consistent random number is a good way to test the application. 
    return Math.floor(randomNumber * (max - min) + min); 
}

// function add(a, b) { // pure function will always return the same value
//     return a + b;
// }

/*
// async for of loop
async function draw(el) {
    const text = el.textContent;
    let soFar = '';
    for (const letter of text) { // each letter of text will build in the console.
        soFar += letter;
        el.textContent = soFar;
        // wait for a certain amount of time
        const { typeMin, typeMax } = el.dataset;
        const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
        await wait(amountOfTimeToWait);
    }
}
*/

// recursion- a function calling itself until it reaches a exit condition
function draw(el) {
    let index = 1;
    const text = el.textContent;
    const { typeMin, typeMax } = el.dataset;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    async function drawLetter() {
        el.textContent = text.slice(0, index);
        index += 1;

        // exit condition
        await wait (amountOfTimeToWait);
        if(index <= text.length) {
            drawLetter();
            // wait for some time
        }

    }
drawLetter();

}
// when this function draw runs, kick off drawLetter


document.querySelectorAll('[data-type').forEach(draw);