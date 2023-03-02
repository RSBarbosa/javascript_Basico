const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: 54654545145,
  email: "andre@email.com"
};

console.log(`O nome do cliente é ${cliente["nome"]} e tem ${cliente["idade"]} de idade`);

// Bom para quando não sabe os nomes das chaves das propriedades

const chaves = [ "nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})