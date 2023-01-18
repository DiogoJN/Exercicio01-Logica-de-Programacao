/*
  Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/


let numberOne = Number(prompt("Digite o primeiro número: "))
let numberTwo = Number(prompt("Digite o segundo número: "))
let par = numberOne + numberTwo

if(numberOne === numberTwo){
  alert("Os dois números inseridos são iguais!!")
} else {
  alert("Os dois números inseridos são diferentes!!")
}

alert("A soma é: " + (par))
alert("A subtração é: " + (numberOne - numberTwo))
alert("A multiplicação é: " + (numberOne * numberTwo))
alert("A divisão é: " + (numberOne / numberTwo).toFixed(2))
alert("O resto da divisão é: " + (numberOne % numberTwo))

if (par % 2 == 0) {
  alert("A soma dos números é par")
} else {
  alert("A soma dos números é impar")
}