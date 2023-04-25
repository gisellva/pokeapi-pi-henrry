import React from 'react'
import Filtrar from '../botones/Filtrar';
import Ordenar from '../botones/Ordenar';
import Nav from '../../nav/Nav'
import Cards from '../cards/cards';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/loading';
import { updateLoadingState } from '../Loading/loadingfuncion';
import styles from '../../home/botones/filtrar.module.css';
import Filtratpororigen from '../botones/filtratpororigen';

export default function Homecomponent( ) {
 const loading=useSelector((state)=>state.loading)
 const pokemons = useSelector(state => state.pokemons);
 const dispatch= useDispatch()

 //usamo el use effect para que el estado de setloadng se actualice  de forma asincronica despues del fech de los pokemones 
 React.useEffect(() => {
  updateLoadingState(pokemons, dispatch);
}, [pokemons, dispatch]);

  return (
    <div>
    <Nav/>
    <Filtrar/>
    <div className={styles.botoneshome}>
    <Ordenar/>
    <Filtratpororigen/>
    </div>
   {loading? <Loading/>: <Cards  />}
    
     </div>
  )
}
