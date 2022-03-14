// Exercicio 01:
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, arr) => acc.concat(arr));
}
//console.log(flatten());


const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercicio 02:
function reduceNames() {
  return books.reduce((acc, arr, index) => {
    if (index === books.length - 1) return acc + arr.author.name + '.';
    return acc + arr.author.name + ', ';
  }, '');
}
//console.log(reduceNames());

// Exercicio 03:
function averageAge() {
  const age = books.reduce((acc, arr) => acc + (arr.releaseYear - arr.author.birthYear), 0);
  return age / books.length;
}
//console.log(averageAge());

// Exercicio 04:
function longestNamedBook() {
  const longestBookName = books.reduce((acc, arr) => acc > arr.name.length ? acc : arr.name.length, 0);
  return books.filter((item) => item.name.length === longestBookName);
}
//console.log(longestNamedBook());

// Exercicio 05:
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, arr) =>
    acc + arr.split('').reduce((acumulator, current) => {
      if (current.toLowerCase() === 'a') return acumulator + 1;
      return acumulator;
    }, 0), 0);
}
//console.log(containsA());

// Exercicio 06:
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const averageGrade = grades.map((item) => item.reduce((acc, arr) => acc + arr) / item.length);
  const averageStudent = students.map((name, index) => ({
    name,
    average: averageGrade[index],
  }));
  return averageStudent;
}
//console.log(studentAverage());
