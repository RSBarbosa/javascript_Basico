// Um aluno recebeu um ponto extra nas suas notas. 
// Adicione esse ponto nas notas da seguinte lista:

// map( ) é uma estrutura de repetição que reescreve o elemento, não altera arrayoriginal

const notas = [ 10, 9.5, 8, 7, 6]

const notasAtualizadas = notas.map( (nota) => {
  return nota +1 >=10 ? 10 : nota + 1;
  
 });

 console.log(notasAtualizadas)