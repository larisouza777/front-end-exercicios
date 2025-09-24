let usoDiaDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12]; // Domingo, Segunda etc...

// Determinar se o uso do dia é Verde, Amarelo ou Vermelho
const indicadorDeUso = (numeroDeHoras) => {
    if (numeroDeHoras <= 1) {
        return '💚';
    } else if (numeroDeHoras <= 3) {
        return '💛';
    } else {
        return '❤️';
    }
}

console.log ( 'Domingo:' + indicadorDeUso (usoDiaDaSemana [0]));
console.log ( 'Segunda-Feira:' + indicadorDeUso (usoDiaDaSemana [1]));
console.log ( 'Terça-Feira:' + indicadorDeUso (usoDiaDaSemana [2]));
console.log ( 'Quarta-Feira:' + indicadorDeUso (usoDiaDaSemana [3]));
console.log ( 'Quinta-Feira:' + indicadorDeUso (usoDiaDaSemana [4]));
console.log ( 'Sexta-Feira:' + indicadorDeUso (usoDiaDaSemana [5]));
console.log ( 'Sábado:' + indicadorDeUso (usoDiaDaSemana [6]));

// console.log(typeof diaDaSemana);
// console.log(typeof diaDaSemana[0]); // NUMBER
// console.log(typeof indicadorDeUso); // funcion 
// diaDaSemana[0] 

