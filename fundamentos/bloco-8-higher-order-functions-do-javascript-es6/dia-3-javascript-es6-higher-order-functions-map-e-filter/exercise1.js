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

// Exercicio 01
const formatedBookNames = (list) => list.map((item) => `${item.name} - ${item.genre} - ${item.author.name}`);
//console.log(formatedBookNames(books));

// Exercicio 02
const authorInfoFunction = (list) => list.map((item) => ({ age: (item.releaseYear - item.author.birthYear), author: item.author.name }));
const authorInfo = authorInfoFunction(books).sort((a, b) => (a.age - b.age));
//console.log(authorInfo);

// Exercicio 03
const fantasyOrScienceFiction = (list) => list.filter((item) => item.genre === 'Ficção Científica' || item.genre === 'Fantasia');
//console.log(fantasyOrScienceFiction(books));

// Exercicio 04
const oldBooksOrdered = (list) => list.filter((item) => item.releaseYear < 1962);
const oldBooks = oldBooksOrdered(books).sort((a, b) => (a.releaseYear - b.releaseYear));
//console.log(oldBooks);

// Exercicio 05
const fantasyOrScienceFictionAuthors = (list) => list.filter((item) => item.genre === 'Ficção Científica' || item.genre === 'Fantasia');
const authorsFantasyOrScienceFiction = fantasyOrScienceFictionAuthors(books);
const formatedAuthorsFantasyOrScienceFiction = (list) => list.map((item) => item.author.name).sort();
//console.log(formatedAuthorsFantasyOrScienceFiction(authorsFantasyOrScienceFiction));

// Exercicio 06
const oldBooksAge = oldBooksOrdered(books);
const oldBooksNames = (list) => list.map((item) => item.name);
//console.log(oldBooksNames(oldBooksAge));

// Exercicio 07
const authorWith3DotsOnName = (list) => list.filter((item) => item.author.name[1] === '.' && item.author.name[4] === '.' && item.author.name[7] === '.');
const nameOfTheBook = authorWith3DotsOnName(books);
const bookWithAuthorWith3DotsOnName = (list) => list.map((item) => item.name);
//console.log(bookWithAuthorWith3DotsOnName(nameOfTheBook));