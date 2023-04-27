import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../../redux/actions';
import Crear from "../home/botones/crear"
import styles from './nav.module.css';
import { setpokemons } from '../../redux/actions';
export default function Serchbar() {
 const dispatch= useDispatch ()


const [pokenserch, setpokenserch] = useState(" ")

const handleserchpokemon=(e)=>{
setpokenserch(e.target.value)
 }
//.trim() lo use para eliminar el espacio en blanco que tiraba a la url
const handleserchpokemondispach=()=>{
  const pokemonName = pokenserch.trim().toLowerCase();
  dispatch(fetchPokemon(pokemonName))
}
const handlepokemon=async()=>{
  fetch('http://localhost:3001/pokemons')
  .then(response => response.json())
  .then(response => dispatch(setpokemons(response)))
  .catch(err => console.error(err))
 setpokenserch(" ")
}
  return (
    <div className={styles.serchbar}>
     
       <label for="myInput" className={styles.labersercbar}></label>
        <div>
        <input className={styles.inputsercbar} type="text" id="myInput" name="name" value={pokenserch} onChange={handleserchpokemon}/>
        <button type="button" className={styles.botonnav} onClick={handleserchpokemondispach}>🔎</button>
        </div>
        <button type="button" className={styles.botonnav} onClick={handlepokemon}>🏠</button>
        <Crear/>
    </div>
  )
}


