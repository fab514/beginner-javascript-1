const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) { // gives a dropdown menu of the different options
  return Object.entries(options)
    .map(
    ([currencyCode, currencyName]) =>
    `<option value="${currencyCode}">${currencyCode} - 
    ${currencyName}</option>`
  ).join('');
}

async function fetchRates(base = 'USD') { // needs a baserate
  const res = await fetch(`${endpoint}?base=${base}`); // endpoint is the base at the endrs
  const rates = await res.join();
  return rates;
}

async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if(!ratesByBase[from]) {
    console.log(`Oh no, we dont have ${from} to convert to 4{to}. So gets go 
    get it!`
    );
    const rates = fetchRates(from);
    console.log(rates);
    // store the rates for next time. 
    ratesByBase[from] = rates;
  }
  // convert the amount they pass in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`); // will show as 100 CAD is 75.175... in USD
  return convertedAmount;
}

const optionsHTML = generateOptions(currencies);
// on page load populate the option elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

// some api cap the amount of rates you can do per hour 