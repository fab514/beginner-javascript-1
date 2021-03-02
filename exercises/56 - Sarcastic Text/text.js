
// variables
const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

/* eslint-disable */
// This is a lookup for the funky letters. eslint will avoid each letter to have it's own line. 
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
  };
  /* eslint-enable */

// functions


// % modulo expression- the remainder after you evenly split a number. 
// each of these filters are actually shorthand for three different functions. Original look is sarcastic: function()
const filters = { 
   sarcastic(letter, index) {
       // if it is odd, it will return 1, and that is truthy, so this if statement will trip.
       if (index % 2) {
           return letter.toUpperCase();
       }
       // if it is even, it will return 0 and we will lowercase it. 
       return letter.toLowerCase();
        
   },
   funky(letter) {
    // first check if there is a funky letter for this case
    let funkyLetter = funkyLetters[letter];
    if (funkyLetter) return funkyLetter;
    // if there is not, check if there is a lowercase version
    funkyLetter = funkyLetters[letter.toLowerCase()];
    if (funkyLetter) return funkyLetter;

    // if there is nothing, return the regular letter
    return letter;
   },
   unable(letter) {
    const random = Math.floor(Math.random() * 3); // random 1 and 3 chance that the space will come out as ... 
    // for Math.random it will give you random numbers including decimals. In order to make it a whole number use Math.floor. 
    if(letter === ' ' && random === 2) {
        return '...';
    }
    return letter;
   },
}

function transformText(text) {
    // const filter = document.querySelector('[name="filter"]:checked').value; // Will use the transform text that is checked in the DOM. the .value will give you the value of the input.
    const filter = filterInputs.find(input => input.checked).value; // This is faster performance wise since the values are already in document.querySelector. This is connected to the Array.from in line 5
    // take the text, and loop over each letter for sarcastic. 
    const mod = Array.from(text).map(filters[filter]); 
    // mod means modify. You are finding the variable filter so you can use this code for any of the 3 filters. Since filter is a variable and not a property you need to use [square brackets].
    result.textContent = mod.join(''); // = mod.join will make the any text typed in the text area returned in the dom
}
textarea.addEventListener('input', e => transformText(e.target.value));
// reminder that e means an event element. The textarea is given the event listener that the input will be tranformed. 

// This will add an event listener that has the font switch work automatically when switch the checked filter.
filterInputs.forEach(input =>
    input.addEventListener('input', () => {
        transformText(textarea.value);
    })
    );
// return




