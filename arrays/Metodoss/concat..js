// Haverá uma palestra sobre padrões de projetos para estudantes das salas de JavaScript e Python. Nossa missão é juntar ambas as salas em uma única lista que exiba o nome de todas as pessoas.

// Em resumo, temos duas listas e precisamos juntá-las.

const alunos1 = ["Renata", "Evaldo", "Camis", "Mari"];
const alunos2 = ["Eraylson", "Ju", "Leo", "Raquel"];


const alunos = alunos1.concat(alunos2)

console.log(alunos)


// concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. 
// Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer
//  alterações no array original.