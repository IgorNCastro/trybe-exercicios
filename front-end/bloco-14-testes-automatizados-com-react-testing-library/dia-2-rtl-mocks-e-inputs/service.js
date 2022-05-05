function randomNumber() {
  return Math.floor(Math.random() * 101)
};

const firstFunction = (string) => string.toUpperCase();
const secondFunction = (string) =>  string.charAt(0);
const thirdFunction = (string1, string2) => string1.concat(string2);

module.exports = {
  randomNumber,
  firstFunction,
  secondFunction,
  thirdFunction,
};
