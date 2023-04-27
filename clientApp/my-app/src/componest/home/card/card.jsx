import React from 'react'
import styles from "./card.module.css"
import { Link } from 'react-router-dom'

export default function Card({name,img,type}) {
  const types =type.join(" y ")
return (
    <div  className={`${styles.card} ${type && type[0]}`}>
 
 <div  className={styles.imagecontend}>
  <img src={img} alt={name} className={styles.pokemonimg} />
 </div>
 
  <div  className={styles.content}>
    
      <span className={styles.title}>
     {name}
      </span>
   

    <p  className={styles.desc}>
    {types}
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
