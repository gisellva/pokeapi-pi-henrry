import React from 'react'
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
    img={pokemon.image} 
   type={pokemon.type} 
   id={pokemon.id}
    key={pokemon.name}
   
    />;
      })}
     </div>
     </div>
  )

}
