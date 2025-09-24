// // console.log("Mensagem do futuro:", mensagemDoFuturo());

// // function mensagemDoFuturo() {
// //   return 'Ainda não temos uma inteligência artifical geral';
// // }

// function soma(numA, numB) {
//     return numA = numB;
// }
// const subtracao = function(numA, numB){
//     return numA - numB;
// }

// const multiplicacao = (numA, numB) => numA * numB{
//     numA * numB; 
// }

// const divisao = (numA, numB) => {
//     return numA / numB;
// }

// console.log(soma(12+19));
// console.log(subtracao(90,10));
// console.log(divisao(500));
// console.log(multipicacao(22,2));

// function calculaDesconto (valor, porcentualdeDesconto){
//     let valorDoDesconto = (valor * percentualDeDesconto) /100;
//     let valorFinal = valor - valorDoDesconto;
//     return valorFinal;
// }

// console.log(calc)

// function minhaFuncao(objeto) {
//   objeto.make = "Toyota";
// }

// var meucarro = { make: "Honda", modelo: "Accord", ano: 1998 };
// var x, y;

// x = meucarro.make; // x recebe o valor "Honda"

// minhaFuncao(meucarro);
// y = meucarro.make;

var fatorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(fatorial(3));