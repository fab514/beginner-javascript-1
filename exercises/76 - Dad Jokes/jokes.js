const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)]; // if you pass arr as an argument you can use this code for any array
  if(item === not) { // when the array generates the same response right after the function will run again until there is not a repeated answer.
    console.log('Ahh we used that one last time, look again');
    return randomItemFromArray(arr, not);
  }
  return item;
}

  async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText);
}

jokeButton.addEventListener('click', handleClick);


// A header is additional information that comes along with a request.
// This information can include the request URL, request method, status code, remote address and Referrer policy along with data that comes back.