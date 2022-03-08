function encode(string) {
  let newString = string.split('');
  let word = [];
  for (let index of newString) {
    if (index === 'a') {
      word.push('1');
    } else if (index === 'e') {
      word.push('2');
    } else if (index === 'i') {
      word.push('3');
    } else if (index === 'o') {
      word.push('4');
    } else if (index === 'u') {
      word.push('5');
    } else {
      word.push(index);
    }
    newString = word.join('');
  }
  return newString;
}

function decode(string) {
  let newString = string.split('');
  let word = [];
  for (let index of newString) {
    if (index === '1') {
      word.push('a');
    } else if (index === '2') {
      word.push('e');
    } else if (index === '3') {
      word.push('i');
    } else if (index === '4') {
      word.push('o');
    } else if (index === '5') {
      word.push('u');
    } else {
      word.push(index);
    }
    newString = word.join('');
  }
  return newString;
}

module.exports = { encode, decode };