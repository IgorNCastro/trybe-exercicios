// Exercicio 1
let a = 10;
let b = 2;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a % b);

// Exercicio 2
const x = 100;
const y = 150;

if (x > y) {
    console.log(x);
}
else if (x < y) {
    console.log(y);
}

// Exercicio 3
const z = 200;

if (x > y && x > z) {
    console.log(x);
}
else if (y > x && y > z) {
    console.log(y);
}
else {
    console.log(z);
}

// Exercicio 4
const i = 1000;

if (i > 0) {
    console.log("positive");
}
else if (i < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

// Exercicio 5
const anguloUm = 60;
const anguloDois = 60;
const anguloTres = 60;

if (anguloUm < 0 || anguloDois < 0 || anguloTres < 0) {
    console.log("Todos os angulos do triangulo devem ser numeros maiores que zero!");
}

if (anguloUm + anguloDois + anguloTres == 180) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercicio 6
const peao = "Uma casa para frente";
const torre = "Horizontal ou vertical sem limite";
const cavalo = "Movimento em L";
const bispo = "Movimento diagonal sem limites";
const rainha = "Qualquer lado sem limites";
const rei = "Qualquer lado mas uma casa por vez";

let pecaXadrez = prompt("Insira o nome de uma peça de xadrez..").toLowerCase();

function retornoPecaXadrez() {
    if (pecaXadrez === "peao") {
        console.log(peao);
    }
    else if (pecaXadrez === "torre") {
        console.log(torre);
    }
    else if (pecaXadrez === "cavalo") {
        console.log(cavalo);
    }
    else if (pecaXadrez === "bispo") {
        console.log(bispo);
    }
    else if (pecaXadrez === "rainha") {
        console.log(rainha);
    }
    else if (pecaXadrez === "rei") {
        console.log(rei);
    }
    else {
        console.log("Peça não encontrada!");
    }
} return retornoPecaXadrez();

// Exercicio 7
let nota = 75;

if (nota >= 90) {
    console.log("A");
}
else if (nota >= 80 && nota < 90) {
    console.log("B");
}
else if (nota >= 70 && nota < 80) {
    console.log("C");
}
else if (nota >= 60 && nota < 70) {
    console.log("D");
}
else if (nota >= 50 && nota < 60) {
    console.log("E");
}
else if (nota < 50) {
    console.log("F");
}

// Exercicio 8
const um = 11;
const dois = 12;
const tres = 13;

if (um % 2 == 0 || dois % 2 == 0 || tres % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercicio 9
const one = 14;
const two = 15;
const three = 16;

if (one % 2 !== 0 || two % 2 !== 0 || three % 2 !== 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercicio 10
const valorVenda = 1000;
const valorCusto = 500;

if (valorVenda < 0 || valorCusto < 0) {
    console.log("Valores devem ser maiores que zero!");
    return;
}

let valorCustoTotal = (valorCusto * 1.2)
let lucro = ((valorVenda - valorCustoTotal) * 1000)
console.log(lucro)

// Exercicio 11
