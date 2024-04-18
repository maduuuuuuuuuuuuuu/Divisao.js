alert("Bem Vindo(a) à divisão em Java Script");

let numerador = parseInt(prompt("Digite um numerador: "));
let denominador = parseInt(prompt("Digite um denominador: "));

let quociente;


if (denominador == 0) {
    alert("Não é possível dividir por zero.");
}
else {
    quociente = numerador / denominador;

    alert (numerador + " " + "dividido por " + denominador + " é " + quociente);
}