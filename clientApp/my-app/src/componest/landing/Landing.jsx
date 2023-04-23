import React from 'react'
import { Link } from 'react-router-dom'
import styles from './landing.module.css';
export default function Landing() {
  return (
    <div className={styles.contend}>
      <header>
        <h1 >¡Binvenidos!</h1>
        <h2>pokedex - Heidy Vanegas </h2>
         <button className={styles.boton}>
          <Link to="home" className={styles.link} >home</Link>
         </button>
         </header>
    </div>
  )
}
