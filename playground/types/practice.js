function greet(name) {
    // eslint-disable-next-line prefer-template
    return 'Hello ' + name + '!';
  }
  greet();
  function praise(name) {
    return `${name}is great!`;
  }
  praise();
  function log(value) {
    console.log(value);
  }
  log();
  
  function disney(character) {
    return `My favorite disney character is ${character}!`;
  }
  disney();
  
  function shout(word) {
    const result = word + word;
    console.log(result);
    return result;
  }
  shout();
  
  function love(word1) {
    const result = `I love ${word1}!`; // has to use back ticks
    console.log(result);
    return result;
  }
  love();