//  Imprima o índice e a lista com os seguintes números:
// 100, 200, 300, 400, 500, 600

// Primeira expressão: Só executa uma vez. Valor que é inicial
// Segunda expressão: condição de execução
// Terceira execução: sempre executada ao final do bloco
//  incremento pode ser escrito ( indice = indice + 1 / indice +=1 /ou indice++)


const numeros = [100, 200, 300, 400, 500, 600];

// for (let indice = 0; indice < 6;  indice++  ){
//   console.log("OI");}

  for (let indice = 0; indice < 6;  indice++  ){
    console.log(numeros[indice]);
  }

  for (let i = 0; i < numeros.length;  i++  ){
    console.log(numeros[i]);
  }
  