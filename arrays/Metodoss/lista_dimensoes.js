// Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a 
// segunda possui suas respectivas médias:

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9
// Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: é possível uma 
// lista conter outras listas. A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.



const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias =  [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias]

console.log(listaAlunosMedias)

console.log(`A aluna da posição 1 da list de alunos é: ${listaAlunosMedias[0][1]}.
A nota dessa aluna é ${listaAlunosMedias[1][1]}.`)

// ___________________________________________________________________________________

// O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, 
// e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. 
// O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. 
// podendo ser:

// 0 -> nomes
// 1 -> idades
// 2 -> faculdade
// O segundo colchete será usado para acessar a informação dentro do array escolhido.

// Outra forma de chamar os arrays de 2 dimensões é matrizes. (Linha e coluna)

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];