const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias =  [10, 8, 7.5, 9];
const listaAlunosMedias = [alunos, medias]

function encontrar(aluno){
if (listaAlunosMedias[0].includes(aluno)){
  const alunos = listaAlunosMedias[0];
  const medias = listaAlunosMedias[1];

   const indice = alunos.indexOf(aluno);
   
   const mediaAluno = medias[indice];

   console.log(`O ${aluno} tem a média ${mediaAluno}.`);
} else{
  console.log("Aluno não encontrado")
}
}
encontrar("João");


// Versão menos verbosa 
function encontrar(aluno){
  if (listaAlunosMedias[0].includes(aluno)){
    // const alunos = listaAlunosMedias[0];
    // const medias = listaAlunosMedias[1];

    const [alunos, medias] = listaAlunosMedias;
  
     const indice = alunos.indexOf(aluno);
     
     const mediaAluno = medias[indice];
  
     console.log(`O ${aluno} tem a média ${mediaAluno}.`);
  } else{
    console.log("Aluno não encontrado")
  }
  }

encontrar("João");