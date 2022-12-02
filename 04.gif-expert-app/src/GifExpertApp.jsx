import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  //Esto es un Hook (nunca poner condicionales a los hooks)
  const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

  const onAddCategory = (newCategory) => {
    console.log(newCategory)

    //Dos modos posibles de añadir nuevas categorias
    //setCategories([...categories,'Valorant'])
    //setCategories(cat => [...cat, '12']);

  }

  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>

        <AddCategory
          //setCategories={setCategories}
          onNewCategory={(value) => onAddCategory(value)}
        />
        <ol>
          {categories.map(category => {
            return <li key={category}>{category}</li>
          })}
        </ol>
            {/*Gif Item*/}
    </>
  )
}
