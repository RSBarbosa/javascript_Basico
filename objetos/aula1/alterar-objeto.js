// const não permite reeatribuir o objeto inteiro, tipo objeto1 agora recebe as informações de objeto2

const pessoa= {
  nome: "Luma",
  profissao: "Engenheira"
};

console.log(pessoa.profissao);

// Não dá erro, da undefined
console.log(pessoa.email);

pessoa.email = "email@dominio.com";
console.log(pessoa.email);

pessoa.nome = "Renata Barbosa";
console.log(pessoa)