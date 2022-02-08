const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];


let counterMelancia = 0;
let counterAbacate = 0;
let counterUva = 0;
let counterLaranja = 0;
let counterJaca = 0;
let counterPera = 0;
let counterBanana = 0;

let contador = {};

for (let index of basket) {
    if (index === 'Melancia') {
        counterMelancia += 1;
    } else if (index === 'Abacate') {
        counterAbacate += 1;
    } else if (index === 'Uva') {
        counterUva += 1;
    } else if (index === 'Laranja') {
        counterLaranja += 1;
    } else if (index === 'Jaca') {
        counterJaca += 1;
    } else if (index === 'Pera') {
        counterPera += 1;
    } else if (index === 'Banana') {
        counterBanana += 1;
    }
}

contador.Melancia = counterMelancia;
contador.Abacate = counterAbacate;
contador.Uva = counterUva;
contador.Laranja = counterLaranja;
contador.Jaca = counterJaca;
contador.Pera = counterPera;
contador.Banana = counterBanana;

console.log('Sua cesta possui: ' + contador.Melancia + ' Melancias')