// Async

// OPCION LARGA
// const getImagenPromesa = () => {
//     return new Promise((resolve, reject) => {
//         resolve('https://developer.mozilla.org/')
//     })
// }

// OPCION 1 LINEA
// const getImagenPromesa = () => new Promise(resolve => resolve('https://developer.mozilla.org/'));

//OPCION ASYNC

const getImage = async() => {
    try {
        const apiKey = 'zTR64hoWPoU78xSk74SJeCSjkJ3XzPk1';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const{url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }

}

getImage();