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

// Exercicio 01:
function authorBornIn1947(array) {
  const ex01 = array.find((item) => item.author.birthYear === 1947);
  return ex01.author.name;
}
//console.log(authorBornIn1947(books));

// Exercicio 02:
function smallerName(array) {
  let nameBook;
  let counter = 100;
  array.forEach((item) => {
    if (item.name.length < counter) {
      counter = item.name.length;
      nameBook = item.name;
    }
  });
  return nameBook;
}
//console.log(smallerName(books));

// Exercicio 03:
function getNamedBook(array) {
  const ex03 = array.find((item) => item.name.length === 26);
  return ex03;
}
//console.log(getNamedBook(books));

// Exercicio 04:
function booksOrderedByReleaseYearDesc(array) {
  return array.sort((a, b) => b.releaseYear - a.releaseYear);
}
//console.log(booksOrderedByReleaseYearDesc(books));

// Exercicio 05:
let expectedResult05 = false;
function everyoneWasBornOnSecXX(array) {
  return expectedResult05 = array.every((item) => item.author.birthYear > 1901) ? true : false;
}
//console.log(everyoneWasBornOnSecXX(books));

// Exercicio 06:
let expectedResult06 = true;
function someBookWasReleaseOnThe80s(array) {
  return expectedResult06 = array.every((item) => item.releaseYear > 1979 && item.releaseYear < 1990) ? true : false;
}
//console.log(someBookWasReleaseOnThe80s(books));

// Exercicio 07:
let expectedResult07 = false;
function authorUnique(array) {
  let checkYear = 0;
  array.forEach((item) => item.author.birthYear !== checkYear) ? checkYear = item.author.birthYear : expectedResult07 = true;
  return expectedResult07;
}
//console.log(authorUnique(books))