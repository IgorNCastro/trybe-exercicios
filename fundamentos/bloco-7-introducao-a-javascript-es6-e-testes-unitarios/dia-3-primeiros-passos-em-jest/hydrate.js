function hydrate(string) {
  // Extraido de https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let numbers = /\d+/g;
  // Cria uma array com os resultados encontrados
  let matches = string.match(numbers);
  let totalWater = 0;
  for (let index of matches) {
    totalWater += parseInt(index);
  }
  if (totalWater > 1) {
    return `${totalWater} copos de água`;
  } return `${totalWater} copo de água`;
}

module.exports = hydrate;