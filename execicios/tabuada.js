//tabuada
const num2 = 9;
for( let i = 0; i < 10; i++){
console.log(num2 + "x" + i + " = " + num2 * i)
}
//1. Contar quantos números pares existem entre 0 e 200:
let count = 0;
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) count++;
}
console.log("Quantidade de pares entre 0 e 200:", count);
//2. Somar todos os números entre -30 e 75:
let soma = 0;
for (let i = -30; i <= 75; i++) {
    soma += i;
}
console.log("Soma de -30 até 75:", soma);
//3. Receber um número e iterar de 0 até ele, multiplicando os valores:
const prompt = require('prompt-sync')();
const num = parseInt(prompt("Digite um número: "));
let resultado = 1;
for (let i = 1; i <= num; i++) {
    resultado *= i;
}
console.log("Multiplicação de 1 até", num, "=", resultado);
//4. Iterar de 0 até 100, mostrando a subtração dos pares e soma dos ímpares:
let subtracaoPares = 0;
let somaImpares = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        subtracaoPares -= i;
    } else {
        somaImpares += i;
    }
}
console.log("Subtração dos pares:", subtracaoPares);
console.log("Soma dos ímpares:", somaImpares);