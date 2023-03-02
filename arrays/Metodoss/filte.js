// retorna de for true, false não retorna

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];


// underline é usando no primeiro parametro para sinalizar que ele não vai ser usado.
const reprovados = alunos.filter((_, indice) => {
  return medias[indice] <= 7;
});

const aprovados = alunos.filter((aluno, indice) => {
  return medias[indice] >7;
});

console.log(aprovados);
console.log(reprovados);