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

for (let chave in cliente)  {
  let tipo = typeof cliente [chave];
  if (tipo !== "object" && tipo !== "function"){
  // console.log(chave);
  // console.log(cliente[chave]);
  console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
}}
