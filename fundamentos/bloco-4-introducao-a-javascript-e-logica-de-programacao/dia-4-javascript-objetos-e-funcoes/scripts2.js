// Exercicio 01
// let string = 'arara';
// let string2 = 'desenvolvimento';
// function verificaPalindrome (word) {
//     let reverseWord = word.split('').reverse().join('');
//     if (word === reverseWord){
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(verificaPalindrome(string));
// console.log(verificaPalindrome(string2));


// Exercicio 02
// let lista = [2, 3, 6, 7, 10, 1];
// function indiceMaior (array) {
//     let maxNumber = 0;
//     let indice = 0;
//     for (let index in array) {
//         if (array[index] > maxNumber) {
//             maxNumber = array[index];
//             indice = index;
//         }
//     }
//     return indice;
// };
// console.log(indiceMaior(lista));


// Exercicio 03
// let lista = [2, 4, 6, 7, 10, 0, -3];
// function indiceMenor (array) {
//     let minNumber = 1000;
//     let indice = 0;
//     for (let index in array) {
//         if (array[index] < minNumber) {
//             minNumber = array[index];
//             indice = index;
//         }
//     }
//     return indice;
// };
// console.log(indiceMenor(lista));


// Exercicio 04
// let list = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// function longerName(array) {
//     let maxCount = array[0];
//     for (let index in array) {
//         if (maxCount.length < array[index].length) {
//             maxCount = array[index];
//         }
//     }
//     return maxCount;
// };
// console.log(longerName(list));


// Exercicio 05
// - GABARITO


// Exercicio 06
// let n = 5;
// function somaFatorial(number) {
//     let counter = 0;
//     for (let index = 1; index <= number; index += 1) {
//         counter = counter + index;
//     }
//     return counter;
// };
// console.log(somaFatorial(n));


// Exercicio 07
// let stringWord = 'trybe';
// let stringEnding = 'be';
// function verificaFimPalavra(stringA, stringB) {
//     let newStringA = stringA.split('');
//     let newStringB = stringB.split('');
//     let wordCutting = (stringA.length - stringB.length);
//     for (let index = 0; index < wordCutting; index += 1) {
//         newStringA.shift();
//     };
//     newStringA = newStringA.join('');
//     newStringB = newStringB.join('');
//     if (newStringA === newStringB) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(verificaFimPalavra(stringWord, stringEnding));