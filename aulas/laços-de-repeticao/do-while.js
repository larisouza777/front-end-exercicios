// Exemplo: Laços de repetição - do while 

// do {
//     nome = prompt('Insira seu nome');
// } while (!nome);
// console.log('Olá ' + nome);

//EXERCICIO 1
// let entrada;

// do {
//     entrada = prompt('Insira um numero');
// } while (entrada != 1 && entrada != 0);

// EXERCICIO 2

// let senha;

// do {
//     senha = prompt('Insira a senha');
// } while (senha != 'lua');

//EXERCICIO 3

// let numero;
// let maiorNumero = 0;
// let contador = 0;

// do {
//     numero = prompt('Insira um numero');
//     numero = Number(numero);
//     if (numero > maiorNumero) {
//         maiorNumero = numero;
//     }
//     contador = contador + 1;
// } while (contador < 5);

// console.log('O maior numero é: ' + maiorNumero);


// for (let contador = 0; contador <= 12; contador = contador + 2) {
//     console.log(contador);
// }

// for (let numero = 0; numero <= 100; numero = numero + 1 ) {
//     console.log(numero);
// }


for (let peso = 0;  somadePesos >= 10; peso = peso + 1) {
    console.log(peso);
}