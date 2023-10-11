let vitorias = 89
let derrotas = 11
let saldo = vitorias - derrotas
let nivel = calcularNivel(saldo)

console.log("O Herói tem um saldo de: " + saldo +  " e está no nível de: " + nivel);


function calcularNivel(saldo)  {

   let nivel = "";

    if (saldo < 10) {
        nivel = 'Ferro';
    } else if (saldo >= 10 && saldo <= 20) {
        nivel = 'Bronze';
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = 'Prata';
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = 'Ouro';
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = 'Diamante';
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }
    
    return nivel
 }