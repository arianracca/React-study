import { useState } from 'react';

export const GifExpertApp = () => {
  //Esto es un Hook (nunca poner condicionales a los hooks)
  const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>
        {/*Input*/}

        {/*Listado de Gif*/}
        <ol>
          {categories.map(category => {
            return <li key={category}>{category}</li>
          })}
        </ol>


            {/*Gif Item*/}
    </>
  )
}
