// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi
//  encontrado.


const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias =  [10, 8, 7.5, 9];
const listaAlunosMedias = [alunos, medias]

function encontrar(aluno){
if (listaAlunosMedias[0].includes(aluno)){
  console.log(`${aluno} está cadastrado`);

   const indice = listaAlunosMedias[0].indexOf(aluno);
   
   const mediaAluno = listaAlunosMedias[1][indice];

   console.log(`O ${aluno} tem a média ${mediaAluno}.`);
} else{
  console.log("Aluno não encontrado")
}
}


encontrar("Renata");