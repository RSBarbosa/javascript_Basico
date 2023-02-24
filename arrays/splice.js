// Desafio 5: Atualizando elementos
// Temos que criar uma lista de chamada com os seguintes alunos:

// João
// Ana
// Caio
// Lara
// Marjorie
// Leo
// Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será
//  atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.

const chamada = ['João',  'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

chamada.splice(1, 2);
// remover a partir do indice 1, remover 2 elementos.

console.log(chamada);
;
chamada.push('Rodrigo');

console.log(chamada);

const chamadas = ['João',  'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
chamadas.splice(1, 2, 'Renata');
// remover a partir do indice 1, remover 2 elementos, terceiro parametro adiciona
console.log(chamadas);