import {getHeroeById, getHeroesByOwner} from "./bases/08-import-export-find-filter";

//Promesas
//
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         reject('No encontrado');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Heroe', heroe)
// }).catch( err => console.warn(err));
// //promesa.finally


//Asincronico
const getHeroeByIdAsync = (id) =>{
    //se explicita un retorno que sino es void por defecto
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe){
                resolve(heroe);
            } else {
                reject('No encontrado');
            }
        }, 2000)
    });
} 

getHeroeByIdAsync(20)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err));
