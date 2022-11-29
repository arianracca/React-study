// Desestructuracion
// Asignación desestructurante

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, p1, p2] = personajes;

console.log(p1, p2)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros)

const useState = (valor) => {
    return [valor, (valor)=>{console.log(`${valor} hace una Genkidama`)}];
}

const [nombre, setNombre] = useState ('Goku');

console.log(nombre);
setNombre('Goku');