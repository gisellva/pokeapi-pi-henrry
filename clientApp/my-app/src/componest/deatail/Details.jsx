import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import styles from './details.module.css';
import { Link } from 'react-router-dom';

export default function Details() {
  const { detailsname } = useParams();
  const [pokemon, setPokemon] = useState({});
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${detailsname}`)
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
  }, [detailsname]);

  return (
    <div className={styles.contenedor} >
      <button className={`${styles.boton}  ${pokemon.types && pokemon.types[0].type.name}`}>
      <Link to="/home"className={styles.link}>home</Link>
      </button>

    <div className={`${styles.contenedordetails}  ${pokemon.types && pokemon.types[0].type.name}`}>
      <div className={styles.contenedordetailstop}>
        <div className={styles.detailstopbar} >
          <p  className={styles.detailstopbarname}>{pokemon.name}</p>
          <spam>#{pokemon.id} </spam>
         </div>
        <div className={styles.detailstopimg}>
        <img className={styles.topimg} src={pokemon.sprites &&pokemon.sprites.other.home.front_default}  alt="ivysaur" class="card_pokemonimg__Pj--I"/>  
        </div>
      </div>
      <div className={styles.contenedordata}>
      
      <div className={styles.contenedordatap}>
      <p className={`${styles.datap}  ${pokemon.types && pokemon.types[0].type.name}`}> Tipo:  <span className={styles.dataspam}>{pokemon.types && pokemon.types[0].type.name}  </span> </p>
         <p  className={`${styles.datap}  ${pokemon.types && pokemon.types[0].type.name}`}>Vida :  <span className={styles.dataspam}> {pokemon.stats &&pokemon.stats[0].base_stat} </span> </p>
         <p className={`${styles.datap}  ${pokemon.types && pokemon.types[0].type.name}`}>Ataque : <span className={styles.dataspam}> {pokemon.stats &&pokemon.stats[1].base_stat} </span> </p>
         <p  className={`${styles.datap}  ${pokemon.types && pokemon.types[0].type.name}`}>Defensa : <span className={styles.dataspam}> {pokemon.stats &&pokemon.stats[2].base_stat} </span> </p>
         <p  className={`${styles.datap}  ${pokemon.types && pokemon.types[0].type.name}`}>Velocidad : <span className={styles.dataspam}> {pokemon.stats &&pokemon.stats[5].base_stat } </span> </p>
         <p  className={`${styles.datap}  ${pokemon.types && pokemon.types[0].type.name}`}>Altura : <span className={styles.dataspam}> {pokemon.stats &&pokemon.height} </span></p>
         <p  className={`${styles.datap}  ${pokemon.types && pokemon.types[0].type.name}`}>Peso : <span className={styles.dataspam}> {pokemon.stats &&pokemon.weight} </span> </p>
  </div>
      </div>
    </div>
    </div>
  );
}
