const cliente ={
  nome: "João",
  idade: 24,
  email: "joao@Email.com",
  telefone: ["341321321", "31211545"]

};

cliente.enderecos = [
  {
  rua: "Rua Zé tatu",
  numero: 777,
  apartamento: true,
  complemento: "apt 102"
},
];

const chavesDoObjeto = Object.keys(cliente);
  console.log(chavesDoObjeto);

  if (!chavesDoObjeto.includes("endereco")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
  }


    

