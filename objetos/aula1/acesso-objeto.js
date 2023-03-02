const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: 54654545145,
  email: "andre@email.com"
};

console.log(`O nome do cliente é ${cliente.nome} e tem ${cliente.idade} de idade`);

console.log(`Os primeiros três numeros do CPF são ${cliente.cpf.substring(0, 3)}`);