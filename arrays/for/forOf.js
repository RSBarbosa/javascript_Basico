// Calcule a média entre as seguintes notas usando o for of:

// para cada elemento de notas execute o que tem dentro do código

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for( let nota of notas){
somaDasNotas += nota
 
}
console.log(somaDasNotas/notas.length);