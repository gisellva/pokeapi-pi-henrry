import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import styles from './details.module.css';
import { Link } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.json())
      .then((pok) => {
        if (pok.name) {
          setPokemon(pok);
        } else {
          window.alert("No existe ese pokemon.");
        }
      })
      .catch((err) => {
        window.alert("No hay pokemon con ese nombre.");
      });
  }, [id]);
console.log(pokemon);
  return (
    <div className={styles.contenedor} >
      <button className={`${styles.boton}  ${pokemon.type ? pokemon.type[0] : "normal"}`}>
      <Link to="/home"className={styles.link}>home</Link>
      </button>

    <div className={`${styles.contenedordetails}  ${pokemon.type ? pokemon.type[0] : "normal"}`}>
      <div className={styles.contenedordetailstop}>
        <div className={styles.detailstopbar} >
          <p  className={styles.detailstopbarname}>{pokemon.name}</p>
          <spam>#{pokemon.id} </spam>
         </div>
        <div className={styles.detailstopimg}>
        <img className={styles.topimg} src={pokemon.image}  alt="ivysaur"/>  
        </div>
      </div>
      <div className={styles.contenedordata}>
      
      <div className={styles.contenedordatap}>
      <p className={`${styles.datap}  ${pokemon.type ? pokemon.type[0] : "normal"}`}> Tipo:  <span className={styles.dataspam}>{pokemon.type}  </span> </p>
         <p  className={`${styles.datap} ${pokemon.type ? pokemon.type[0] : "normal"}`}>Vida :  <span className={styles.dataspam}> {pokemon.hp} </span> </p>
         <p className={`${styles.datap}  ${pokemon.type ? pokemon.type[0] : "normal"}`}>Ataque : <span className={styles.dataspam}> {pokemon.attack} </span> </p>
         <p  className={`${styles.datap}  ${pokemon.type ? pokemon.type[0] : "normal"}`}>Defensa : <span className={styles.dataspam}> {pokemon.defense} </span> </p>
         <p  className={`${styles.datap} ${pokemon.type ? pokemon.type[0] : "normal"}`}>Velocidad : <span className={styles.dataspam}> {pokemon.speed } </span> </p>
         <p  className={`${styles.datap}  ${pokemon.type ? pokemon.type[0] : "normal"}`}>Peso : <span className={styles.dataspam}> {pokemon.weight} </span> </p>
  </div>
      </div>
    </div>
    </div>
  );
}
