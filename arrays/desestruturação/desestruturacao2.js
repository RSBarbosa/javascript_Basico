const pessoa = {
  nome: "Renata",
  idade: 32
};

const pessoaComTelefone = 
{...pessoa, telefone: 45454545};

const {idade} = pessoa

console.log(idade)

// -------------
// Versão 1

function imprimeDados(dados){
  console.log(dados)
}
 imprimeDados(pessoa)

 // -------------
// Versão 2

function imprimeDadoos(dadoos){
  const {nome, idade} = dadoos
  console.log(nome, idade)
}
 imprimeDadoos(pessoa)

 // -------------
// Versão 3
function imprimeDadooos({nome, idade}){
  console.log(nome, idade)
}
 imprimeDadooos(pessoa)
