//FETCH API

const apiKey = 'zTR64hoWPoU78xSk74SJeCSjkJ3XzPk1';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then( resp =>{
//     resp.json().then(data =>{
//         console.log(data)
//     })
// })
// .catch(console.warn);

//Lo mismo que arriba pero mas limpio  PROMESAS EN CADENA
//(El resultado de la promesa pasa al siguiente .then)
peticion
    .then( resp => resp.json())
    .then(({data}) => {  //desestructurar el parametro data
        const{url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
    .catch(console.warn);