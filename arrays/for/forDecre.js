


const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

console.log(numeros.length)
console.log("___________________________")

// ------------------------

const nuumeros = [100, 200, 300, 400, 500, 600];

for (let i = nuumeros.length - 1; i >= 0; i -= 2) {
  console.log(nuumeros[i]);
}
console.log("___________________________")


// ------------------

const nnumeros = [100, 200, 300, 400, 500, 600];

for (let i = nnumeros.length - 1; nnumeros[i] >= 300; i -= 2) {
  console.log(nnumeros[i]);
}
console.log("___________________________")

// --------------------------

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);