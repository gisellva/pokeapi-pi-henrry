import React, { useEffect, useState } from 'react'
import Card from '../card/card'
import styles from './carsd.module.css';
import {  useDispatch, useSelector } from 'react-redux';
import { setpokemons } from '../../../redux/actions';


export default function Cards() {
  const pokemons = useSelector(state => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cards}>
        {currentItems.map(pokemon => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.image}
            type={pokemon.type}
          />
        ))}
      </div>
      {pokemons.length >1 ? 
       <div className={styles.botones}>
       <button
         onClick={handlePrevPage}
         className={`${styles.boton} botonnotmal`}
         disabled={currentPage === 1}
       >
         atras
       </button>
       <p className={styles.paginado}>
         {currentPage}
       </p>
       <button
         onClick={handleNextPage}
         className={`${styles.boton} botonnotmal`}
         disabled={indexOfLastItem >= pokemons.length}
       >
         adelante
       </button>
     </div>: ""
     }
      
    </div>
  );
}