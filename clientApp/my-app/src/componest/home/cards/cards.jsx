import React, { useEffect } from 'react'
import Card from '../card/card'
import styles from './carsd.module.css';
import {  useSelector } from 'react-redux';


export default function Cards() {
  const pokemons = useSelector(state => state.pokemons);
 
 
  return (
    <div className={ styles.cardscontend}>
      
    <div className={ styles.cards}>
   {pokemons.map((pokemon) => {
    return < Card 
    name ={pokemon.name} 
    img={pokemon.sprites.other.home.front_default} 
    type={pokemon.types[0].type.name} 
    key={pokemon.name}
   
    />;
      })}
     </div>
     </div>
  )

}
