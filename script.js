/*

  Peça ao usuário inserir dois números

  Após o usuário inserir os números , calcule

  A soma dos dois números;
  A subtração dos dois números;
  A multiplicação dos dois números;
  A divisão dos dois números;
  O resto da divisão dos dois números;

  Verifique se a soma dos dois número é par ou ímpar
  Verifique se os dois número inseridos são iguais (ou diferentes)


*/

let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número:"))

let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = numberOne / numberTwo
let restDivision = numberOne % numberTwo


alert(`A soma dos dois números; ${sum}`)
alert(`A subtração dos dois números; ${subtraction}`)
alert(`A multiplicação dos dois números; ${multiplication}`)
alert(`A divisão dos dois números; ${division}`)
alert(`O resto da divisão dos dois números; ${restDivision}`)


if(sum & 1){
  alert(`A soma dos dois número é ímpar; ${sum}`)
} else{
  alert(`A soma dos dois número é par; ${sum}`)
}


if(numberOne === numberTwo) {
  alert(`Os dois números que você inseriu são iguais`)
} else {
  alert(`Os dois números que você inseriu são diferentes`)
}