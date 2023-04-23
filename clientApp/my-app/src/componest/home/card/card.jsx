import React from 'react'
import styles from './card.module.css';
import { Link } from 'react-router-dom'

export default function Card({name,img,type}) {
return (
    <div  className={`${styles.card} ${type}`}>
 
 <div  className={styles.image}>
  <img src={img} alt={name} className={styles.pokemonimg} />
 </div>
 
  <div  className={styles.content}>
    
      <span className={styles.title}>
     {name}
      </span>
   

    <p  className={styles.desc}>
    {type}
    </p>
    <Link to={`/details/${name} `}>
    <button  className={styles.action}>
      detalles
      <span aria-hidden="true">
        →
      </span>
    </button>
    </Link>
   
  </div>
</div>
  )
}
