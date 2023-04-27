import React, {  useState } from 'react'
import styles from './filtrar.module.css';
import { useDispatch } from 'react-redux';
import { filterByAttack, orderA_Z ,orderZ_A } from '../../../redux/actions';

export default function Ordenar() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch()
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  const handleorderA_Z = () => {
   dispatch(orderA_Z())
  }
  const handleorderZ_A=()=>{
   dispatch(orderZ_A())
  }
  const handlefilterByAttack = () => {
    dispatch(filterByAttack());
  };
  return (
    <div className={styles.filtartpororigen}>
      {showMenu ?
        <div>
          <button className={`${styles.boton} botonnotmal`} onClick={toggleMenu}>
            &#9776;
          </button>
          <ul>
            <li><button className={`${styles.boton} poison`} onClick={handleorderA_Z}>a-z</button></li>
            <li><button className={`${styles.boton} poison`} onClick={handleorderZ_A}>z-a</button></li>
            <li><button className={`${styles.boton} poison`} onClick={handlefilterByAttack}>ataque</button></li>
          </ul>
        </div>
        :
        <button className={`${styles.boton} botonnotmal`} onClick={toggleMenu}>
          ordenar
        </button>
      }
    </div>
  )
}
