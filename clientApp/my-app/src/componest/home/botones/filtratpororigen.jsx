import React, { useState } from 'react'
import styles from './filtrar.module.css';
export default function Filtratpororigen() {
    const [showMenu, setShowMenu] = useState(false);
    function toggleMenu() {
      setShowMenu(!showMenu);
    }
  return (
    <div className={styles.filtartpororigen}>
    {showMenu?
    <div>
      <button className={`${styles.boton} botonnotmal`} onClick={toggleMenu}>
      &#9776;
    </button>
    <ul>
      <li><button  className={`${styles.boton} poison`}>pokeapi</button></li>
      <li><button  className={`${styles.boton} poison`}>creados</button></li>
      </ul>
     </div>
    :
    <button className={`${styles.boton} botonnotmal`} onClick={toggleMenu}>
    filtartpor origen
  </button>
    }
     </div>
  )
}
