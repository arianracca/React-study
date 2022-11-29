import {heroes, owners} from '../data/heroes';
// primero importacion default, segundo importacion individual

//Uso de Find
export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id == id);
}
// console.log(getHeroeById(5));

//Uso de Filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner == owner);
// console.log(getHeroesByOwner('DC'));
