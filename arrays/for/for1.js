// Calcule a média entre as seguintes notas, usando o for:

const notas = [10, 6.5, 8, 7.5 ];


let somaDasNotas = 0;

for(let i= 0; i < notas.length; i++){
  somaDasNotas += notas[i]; 

}

console.log(somaDasNotas/ notas.length)