import React from 'react'
import Filtrar from '../botones/Filtrar';
import Ordenar from '../botones/Ordenar';
import Nav from '../../nav/Nav'
import Cards from '../cards/cards';
import styles from '../../home/botones/filtrar.module.css';
import Filtratpororigen from '../botones/filtratpororigen';

export default function Homecomponent( ) {


  return (
    <div>
    <Nav/>
    <Filtrar/>
    <div className={styles.botoneshome}>
    <Ordenar/>
    <Filtratpororigen/>
    </div>
    <Cards  />
    
     </div>
  )
}
