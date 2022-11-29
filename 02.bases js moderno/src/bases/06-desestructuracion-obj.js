
// Desestructuracion
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    alias: 'Ironman'
};

const {nombre, apellido, alias} = persona;
const {alias:heroe} = persona; // Asigna un valor a una variable especifica designada

console.log(heroe);

const retornaPersona = (usuario) => {
    const {nombre, alias} = usuario;
    console.log(nombre, alias)
};

retornaPersona(persona)


//si existe la propiedad en el parámetro usa esa propiedad
const retornaPersonaArgDesestr = ({nombre, apellido, alias}) => { 
    console.log(nombre, apellido, alias)
};

retornaPersona(persona);
retornaPersonaArgDesestr(persona);

const useContext = ({nombre, apellido, alias}) => {
    return {
        nombreClave: alias,
        nombreCompletoReal: nombre + ' ' + apellido,
        latlng: {
            lat: 200,
            long: 544
        }
    }
};

// const {nombreClave, nombreCompletoReal, latlng: {lat, long}} = useContext(persona);
const {nombreClave, nombreCompletoReal, latlng} = useContext(persona);
const {lat, long} = latlng;

console.log(nombreClave, nombreCompletoReal, lat, long);