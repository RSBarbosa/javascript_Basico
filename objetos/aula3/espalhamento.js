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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone)

const encomenda = { 
  destinatario: cliente.nome,
  ...cliente.enderecos[0]
};

console.log(encomenda)

