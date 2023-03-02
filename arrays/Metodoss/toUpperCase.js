// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas.

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map( (nome) => {
  return nome.toUpperCase( );
}) ;

//  com uso de arrow functions não precisa colocar return
const nomessPadronizados = nomes.map( (nome) => nome.toUpperCase( ));

console.log(nomessPadronizados)

