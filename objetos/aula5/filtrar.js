const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento(proprietarios){
  return proprietarios.filter((dono) =>{
    return(
      dono.endereco.apartamento &&
       !dono.endereco.hasOwnProperty("complemento"))
  });
};

const filtrados = filtrarApartamentosSemComplemento(clientes);
console.log (filtrados)