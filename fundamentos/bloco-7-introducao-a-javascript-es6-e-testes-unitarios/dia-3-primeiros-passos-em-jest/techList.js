function techList(array, name) {
  if (array.length === 0) {
    let msg = 'Vazio!';
    return msg;
  }
  let newArray = array.sort();
  let techs = [];
  for (let index = 0; index < newArray.length; index += 1) {
    techs.push({ tech: newArray[index], name: name });
  }
  return techs;
}

module.exports = techList;