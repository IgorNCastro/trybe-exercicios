const buttonCoins = document.getElementById('coin-input');
const listFather = document.getElementById('coins-generate');

function populateList(object) {
  const newDiv = document.createElement('li');
  let price = Math.round(object.price * 100) / 100;
  newDiv.innerHTML = `${object.name} : USD ${price}`;
  listFather.appendChild(newDiv);
}

function getData() {
  fetch('https://api.coincap.io/v2/assets')
  .then((resposta) => {
    return resposta.json();
  })
  .then((dado) => {
    for (let index of dado.data) {
      const listFinal = {
        name: index.id,
        price: index.priceUsd,
      }
      populateList(listFinal);
    }
  })
}

getData();