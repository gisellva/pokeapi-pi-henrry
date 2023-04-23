import React from 'react'
import styles from './filtrar.module.css';

export default function Filtrar() {
  const types = ["normal","fighting", "flying","poison","ground","rock","bug","ghost","steel","fire","water","grass", "electric", "psychic", "ice","dragon","dark","fairy","unknown","shadow"];
 
  const handleFilterClick = (event) => {
    const filterValue = event.target.value;
     console.log(filterValue);;
  };

  return (
    <>
     <div className={styles.botones} >
     {types.map(type=>{
      return(
        <button value={type} onClick={handleFilterClick} className={`${styles.boton} ${type}`}>{type} </button>
      )
     })}
     </div>
      
    </>

  )
}
