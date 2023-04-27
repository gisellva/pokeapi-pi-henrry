import React from 'react'
import styles from './filtrar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fechpokemonstype, setPokemonstype } from '../../../redux/actions';
//import { fechpokemonstype } from '../../../redux/actions';

export default function Filtrar() {

  const dispatch = useDispatch();
  const types = useSelector(state => state.types);

  useEffect(() => {
    let namesArray = [];
   fetch('http://localhost:3001/types')
      .then(response => response.json())
      .then(response => {
        response.forEach(item => {
          namesArray.push(item.name);
        });
        dispatch(setPokemonstype(namesArray))
      })
      .catch(err => console.error(err))
   }, [])
  
  const handleFilterClick = (event) => {
    const filterValue = event.target.value;
    dispatch(fechpokemonstype(filterValue))
  };

  return (
    <>
     <div className={styles.botones} >
     {types.map(type=>{
      return(
        <button key={type} value={type} onClick={handleFilterClick} className={`${styles.boton} ${type}`}>{type} </button>
      )
     })}
     </div>
      
    </>

  )
}
