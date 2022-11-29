
// Arreglos en JS
// const arreglo = new Array(100)

const arreglo = [];

console.log(arreglo);

arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

console.log(arreglo);

let arreglo2 = [...arreglo, 5];  // operador spread: clona el contenido
console.log(arreglo2);

// map crea un nuevo arreglo en base al anterior y genera operaciones si son indicadas
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2
})

console.log(arreglo3);

