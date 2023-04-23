import React from 'react'
import { Link } from 'react-router-dom'
import styles from './filtrar.module.css';
export default function Crear() {
  return (
    <> 
   
    <Link to= "/form">
     <button className={styles.boton}>➕</button>
    </Link>
    </>
  )
}
