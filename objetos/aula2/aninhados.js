const cliente ={
  nome: "João",
  idade: 24,
  email: "joao@Email.com",
  telefone: ["341321321", "31211545"]

};

cliente.endereco = {
  rua: "Rua Zé tatu",
  numero: 777,
  apartamento: true,
  complemento: "apt 102"
};

// console.log(cliente.endereco);

console.log(cliente["endereco"]);
