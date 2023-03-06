const cliente ={
  nome: "João",
  idade: 24,
  email: "joao@Email.com",
  telefone: ["341321321", "31211545"]

};

cliente.endereco = [{
  rua: "Rua Zé tatu",
  numero: 777,
  apartamento: true,
  complemento: "apt 102"
}];

cliente.endereco.push({
  rua: "Rua Luiz José",
  numero: 102,
  apartamento: false
});

const listaApenasApartamentos = cliente.endereco.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);

