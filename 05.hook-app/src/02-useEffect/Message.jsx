import { useEffect, useState } from "react"

export const Message = () => {
    
    const [coords, setCoords] = useState({ x: 0, y: 0});

    useEffect(() => {
        //funcion que se crea para el hook -- Se pasa por referencia al montar y desmontar el hook
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            setCoords({ x, y })
        }
      //Lo que pasa al montarse el componente
        window.addEventListener( 'mousemove', onMouseMove );
      
      //Limpieza al desmontarse el componente
      //Fundamental para evitar fugas de memoria
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove );
      }
    }, []);
    


  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) } 
    </> //hace string el objeto coords
  )
}
