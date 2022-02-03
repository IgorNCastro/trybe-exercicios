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

let pecaXadrez = "peao";

if (pecaXadrez === "peao") {
    console.log(peao);
} else if (pecaXadrez === "torre") {
    console.log(torre);
} else if (pecaXadrez === "cavalo") {
    console.log(cavalo);
} else if (pecaXadrez === "bispo") {
    console.log(bispo);
} else if (pecaXadrez === "rainha") {
    console.log(rainha);
} else if (pecaXadrez === "rei") {
    console.log(rei);
} else {
    console.log("Peça não encontrada!");
}

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
let salario = 3500;
let desconto;
let salarioInss;
let descontoIr;
let salarioLiquido;

if (salario > 0 && salario <= 1556.94) {
    desconto = ((salario * 1.08) - salario);
    salarioInss = (salario - desconto);
} else if (salario > 1556.94 && salario <= 2594.92) {
    desconto = ((salario * 1.09) - salario);
    salarioInss = (salario - desconto);
} else if (salario > 2594.92 && salario <= 5189.82) {
    desconto = ((salario * 1.11) - salario);
    salarioInss = (salario - desconto);
} else if (salario > 5189.82) {
    salarioInss = (salario - 570.88);
} 

if (salarioInss > 0 && salarioInss <= 1903.98) {
    salarioLiquido = salarioInss;
}
else if (salarioInss > 1903.98 && salarioInss <= 2826.65) {
    descontoIr = (((salarioInss * 1.075) - salarioInss) - 142.8);
    salarioLiquido = (salarioInss - descontoIr);
}
else if (salarioInss > 2826.65 && salarioInss <= 3751.05) {
    descontoIr = (((salarioInss * 1.15) - salarioInss) - 354.8);
    salarioLiquido = (salarioInss - descontoIr);
}
else if (salarioInss > 3751.05 && salarioInss <= 4664.68) {
    descontoIr = (((salarioInss * 1.225) - salarioInss) - 636.13);
    salarioLiquido = (salarioInss - descontoIr);
}
else if (salarioInss > 4664.68) {
    descontoIr = (((salarioInss * 1.275) - salarioInss) - 869.36);
    salarioLiquido = (salarioInss - descontoIr);
}

console.log(salarioLiquido);