const nomes = ["Evaldo", "Mari", "Camis"];

// Forma 1
nomes.forEach(function(nome){
  console.log(nome);
});

// Forma 2
nomes.forEach((nome) => {console.log(nome)});


// Forma 3
function imprimeNome(nome){
  console.log(nome);
}
 nomes.forEach(imprimeNome);

