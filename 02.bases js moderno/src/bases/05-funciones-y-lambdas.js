
// Funciones

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Goku'));

const salu2 = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(salu2('Vegeta'));


const salu3 = (nombre) => `Hola, ${nombre}`;

console.log(salu3('Gohan'));

// Funcion Lambda que retorna un objeto. Requiere añadir el objeto entre parentesis.
const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'Ari_123'
    });

console.log(getUser())

function getUsuarioActivo(nombre) {
    return {
        uid: 'ARG563',
        username: nombre
    }
};

const getUsuarioActivoFlecha = (nombre) => ({
    uid: 'ARG578256',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Arian');

console.log(usuarioActivo);

const usuarioActivoFlecha = getUsuarioActivoFlecha('El Ari');

console.log(usuarioActivoFlecha);
