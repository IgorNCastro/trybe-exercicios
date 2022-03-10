// Exercicio 01
const fillEmployee = (name) => {
  let employeeEmail = (name.replace(/ /g,"_").toLowerCase());
  const employee = {
    name,
    email: `${employeeEmail}@trybe.com`,
  }
  return employee;
}
const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
newEmployees(fillEmployee);

// Exercicio 02
const sortedNumber = (number) => {
  let betNumber = Math.floor(Math.random() * 5) + 1;
  let win;
  betNumber === number ? win = true : win = false;
  return win;
}
const checkResult = (number, func) => {
  const winner = func(number);
  return winner === true ? 'Parabéns você ganhou' : 'Tente novamente';
}
checkResult(3, sortedNumber);

// Exercicio 03
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkPoints = (array1, array2) => {
  let counter = 0;
  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] === array2[index]) return counter += 1;
    if (array1[index] !== array2[index] && array2[index] !== 'N.A') return counter -= 0.5;
  }
}
const finalPoints = (array1, array2, func) => {
  const points = func(array1, array2);
  return points;
}
finalPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkPoints);

// BÔNUS - Parte I
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const calcDamage = (members) => {
  if (members === 'dragon') dragon.damage = Math.round(Math.random() * (dragon.strength - 15)) + 15;
  if (members === 'warrior') warrior.damage = Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength;
  if (members === 'mage') {
    if (mage.mana >= 15) {
      mage.damage = Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence;
      mage.mana -= 15;
    }
    if (mage.mana < 15) mage.damage = 'Não possui mana suficiente';
  }
}

const gameActions = {
  // Crie as HOFs neste objeto.
  damageWarrior: (func) => {
    func('warrior');
    dragon.healthPoints -= warrior.damage;
  },
  damageMage: (func) => {
    func('mage');
    dragon.healthPoints -= mage.damage;
  },
  damageDragon: (func) => {
    func('dragon');
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  roundEnd: () => battleMembers,
};
gameActions.damageWarrior(calcDamage);
gameActions.damageMage(calcDamage);
gameActions.damageDragon(calcDamage);
console.log(gameActions.roundEnd());