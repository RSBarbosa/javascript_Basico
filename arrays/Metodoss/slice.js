// Desafio 4: Sala dividida
// Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:
// Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. Isto é, duas listas com 10 estudantes, cada.

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

 console.log(alunos.length)

// const sala1 = alunos.slice(0,10);
// const sala2 = alunos.slice(10, 20)git;

const sala1 = alunos.slice(0, alunos.length/2);
const sala2 = alunos.slice( alunos.length/2);

console.log(sala1)
console.log(sala2)
