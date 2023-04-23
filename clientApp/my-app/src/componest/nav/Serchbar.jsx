import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchPokemon, getpokemonsDetailaction } from '../../redux/actions';
import { getPokemon } from '../../redux/api';
import Crear from "../home/botones/crear"
import styles from './nav.module.css';
export default function Serchbar() {
 const dispach= useDispatch ()


const [pokenserch, setpokenserch] = useState(" ")

const handleserchpokemon=(e)=>{
setpokenserch(e.target.value)
 }
//.trim() lo use para eliminar el espacio en blanco que tiraba a la url
const handleserchpokemondispach=()=>{
  const pokemonName = pokenserch.trim().toLowerCase();
  dispach(fetchPokemon(pokemonName))
}
const handlepokemon=async()=>{
 const pokeres = await getPokemon();
 dispach(getpokemonsDetailaction(pokeres))
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


