const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) { // with random numbers it is hard to test because teh result will always be different
   // passing a consistent random number is a good way to test the application. 
    return Math.floor(randomNumber * (max - min) + min); 
}

// function add(a, b) { // pure function will always return the same value
//     return a + b;
// }

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

// recursion
document.querySelectorAll('[data-type').forEach(draw);