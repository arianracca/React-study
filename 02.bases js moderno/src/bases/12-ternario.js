// Operador condicional ternario

const activo = activo;

// // Condicional tradicional
// let mensaje = '';

// if (activo){
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// // TERNARIO
// const mensaje = (activo === true)? 'Activo' : 'Inactivo';

//El mensaje se escribe tras el && y se muestra solo si se cumple la primera condicion
const mensaje = activo && 'Activo';
console.log(mensaje)