const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};
const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};
const userInfo = {
  ...user,
  ...jobInfos,
}
const phraseFunction = ({ name, age, nationality, profession, squadInitials, squad }) => {
  return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
}
//console.log(phraseFunction(userInfo));

const getNationality = ({ firstName, lastName = 'Silvoni', nationality = 'Brazilian', age = '35' }) => `${firstName} ${lastName} is ${nationality} and ${age} years old`;
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const otherPerson = {
  firstName: 'Ivan',
  nationality: 'Russian',
  age: 25,
};
//console.log(getNationality(otherPerson)); // Ivan is Russian
//console.log(getNationality(person));


// Exercicio 01:
const rectangleArea = (width, height) => width * height;
const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];
rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});

// Exercicio 02:
const sum = (...numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(1,2,3,4,5,6,10,1000));

// Exercicio 03:
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};
const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};
// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// Exercicio 04:
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
const filterPeople = (arr) => arr.filter(({ bornIn, nationality }) => bornIn > 1900 && bornIn <= 2000 && nationality === 'Australian');
//console.log(filterPeople(people));

// Exercicio 05:
const myList = [1, 2, 3];
const swap = (a) => [a[2], a[1], a[0]];
const swapAlt = ([a, b, c]) => [c, b, a];
//console.log(swap(myList));
//console.log(swapAlt(myList));

// Exercicio 06:
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const toObject = ([name, fabric, year]) => ({ name, fabric, year });
//console.log(toObject(palio));

// Exercicio 07:
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];
const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;
//console.log(shipLength(ships[0]));

// Exercicio 08:
const greet = (name, msg = 'Hi') => `${msg} ${name}`;
//console.log(greet('Igor', 'Bom dia'))

// Exercicio 09:
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
const { spring, summer, autumn, winter } = yearSeasons;
const yearLong = [...spring, ...summer, ...autumn, ...winter];
console.log(yearLong);