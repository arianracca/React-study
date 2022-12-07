import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// FUNCTIONAL COMPONENT
export const GifExpertApp = () => {
    // HOOK
    const [ categories, setCategories ] = useState([ 'Dragon Ball' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>Gif Searching</h1>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}
