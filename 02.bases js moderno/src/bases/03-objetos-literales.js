

const persona = {
    nombre: 'Bruce',
    apellido: 'Banner',
    personaje: 'Hulk',
    accion: {
        golpe: 'Smash!!',
        salto: 'Jump!!'
    }
};

console.table({
    persona
});

const persona2 = persona //asignacion de referencia al mismo espacio en memoria

const persona3 = {...persona} //operador spread: genera copia del objeto en una nueva variable
console.table(persona3.accion)
