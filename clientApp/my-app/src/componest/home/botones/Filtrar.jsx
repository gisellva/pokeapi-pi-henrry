import React from 'react'
import styles from './filtrar.module.css';
import { useDispatch } from 'react-redux';
import { fechpokemonstype } from '../../../redux/actions';

export default function Filtrar() {
  const types = ["normal","fighting", "flying","poison","ground","rock","bug","ghost","steel","fire","water","grass", "electric", "psychic", "ice","dragon","dark","fairy","unknown","shadow"];
  const dispatch = useDispatch();
  const handleFilterClick = (event) => {
    const filterValue = event.target.value;
    dispatch( fechpokemonstype(filterValue))
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
