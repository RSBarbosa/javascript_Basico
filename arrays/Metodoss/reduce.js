// Com a média de todos os alunos de 3 salas, 
// calcule a média geral de cada sala:


// Reduce não altera valor original
// primeiro parametro acumulador, recebe o segundo parametro do reduce, que no caso é zero. 
 
// acc é acumilador em ingles

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
  const somaDasNotas = notasDaSala.reduce( (acumulador, nota) => {
    return acumulador + nota;
  }, 0)

  
  console.log(`${somaDasNotas / notasDaSala.length}`)
};

 calculaMedia(salaJS)


  // Resumida 
  function calculaMediaa(notassDaSala){
    const somaDasNotass = notassDaSala.reduce( (acc, nota) => acc + nota, 0)

  console.log(`${somaDasNotass / notassDaSala.length}`)}


calculaMediaa(salaPython)

