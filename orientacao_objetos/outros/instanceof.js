 export class Personagem {
  nome
  vida
  mana
  level
  tipo

  constructor(nome, level, tipo ){
    this.nome = nome
    this.level = level
    this.tipo = tipo

  }

  obterInsignia( ) {
      if (this.level >= 5) {
          return `Implacavel ${ this.tipo }`
      }
      return `${ this.tipo } iniciante`
  }
}

// const personagemJack = new Personagem( )

// console.log(personagemJack instanceof Personagem) 


// class Mago {
//   magia = 10
// }

// console.log(personagemJack instanceof Mago)

// Instanceof verifica se a intância foi ou não criada a partir de uma determinada classe