import React, { useState } from 'react'
import styles from './filtrar.module.css';
import { filterorigenapi, filterorigendb } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
export default function Filtratpororigen() {
  const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    function toggleMenu() {
      setShowMenu(!showMenu);
    }
    const handlefilterorigenapi=()=>{
      fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .then(response => dispatch(filterorigenapi(response)))
      .catch(err => console.error(err))
        
    }
    const handlefilterorigendb=()=>{
      fetch('http://localhost:3001/pokemonsdb')
      .then(response => response.json())
      .then(response => dispatch(filterorigendb(response)))
      .catch(err => console.error(err))
        
    }
  return (
    <div className={styles.filtartpororigen}>
    {showMenu?
    <div>
      <button className={`${styles.boton} botonnotmal`} onClick={toggleMenu}>
      &#9776;
    </button>
    <ul>
      <li><button  className={`${styles.boton} poison`} onClick={handlefilterorigenapi}>pokeapi</button></li>
      <li><button  className={`${styles.boton} poison`} onClick={handlefilterorigendb}>creados</button></li>
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
