//  JSON - Notação de objetos javascript
// Utilizado para configuração ou padrões que quer colocar no código e usar em outros lugares
// transformar objeto em string
// Não tem comentários
// Não aceita funções ou métodos 

// require é uma função do node para usar um arquivo que está em outra pasta

const dados = require ("./cliente.json");
console.log(dados)
console.log(typeof dados);

// Para transformar um objeto em string usa stringify
// É mais fácil transitar dados em formato de string
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

// ler a string e tenta transformar em objeto Json
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
console.log(typeof objetoCliente)

