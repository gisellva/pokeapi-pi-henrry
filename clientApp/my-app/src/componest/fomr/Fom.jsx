import React, { useState } from 'react'
import styles from './form.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Fomr() {
  const  types =useSelector(state=>state.types)
  const [formData, setFormData] = useState({
    nombre: '',
    imagen: null,
    vida: '',
    ataque: '',
    defensa: '',
    velocidad: '',
    altura: '',
    peso: '',
    tipos: ''
  });

  const expresiones={
    numeros: /^\d{1,3}$/, 
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, 
    imagen:/^.+\.(jpg|png|svg|jfif)$/i
 }
 
  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:  e.target.value
    })
  }

  
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!expresiones.nombre.test(formData.nombre)) {
      alert('El campo nombre  debe contener solo letras con espacios y no ser mayor de de 30 letras.');
      return;
    }
    if (!expresiones.numeros.test(formData.vida)) {
      alert('El campo  debe vida debe tener de 1 a maximo 3 numeros.');
      return;
    }
    if (!expresiones.numeros.test(formData.ataque)) {
      alert('El campo  debe ataque debe tener de 1 a maximo 3 numeros.');
      return;
    }
    if (!expresiones.numeros.test(formData.defensa)) {
      alert('El campo  debe defensa debe tener de 1 a maximo 3 numeros.');
      return;
    }
    if (!expresiones.numeros.test(formData.velocidad)) {
      alert('El campo  debe velocidad debe tener de 1 a maximo 3 numeros.');
      return;
    }
    if (!expresiones.numeros.test(formData.altura)) {
      alert('El campo  debe altura debe tener de 1 a maximo 3 numeros.');
      return;
    }
    if (!expresiones.numeros.test(formData.peso)) {
      alert('El campo  debe peso debe tener de 1 a maximo 3 numeros.');
      return;
    }
    
    if (!formData.nombre || !formData.imagen || !formData.vida || !formData.ataque || !formData.defensa || !formData.velocidad || !formData.altura || !formData.peso || !formData.tipos) {
      alert('Todos los campos son obligatorios');
      return;
    }
    console.log(formData);
    const formDataToSend = {
      name: formData.nombre,
      hp: formData.vida,
      attack: formData.ataque,
      defense: formData.defensa,
      speed: formData.velocidad,
      height: formData.altura,
      weight: formData.peso,
      image: formData.imagen,
      type:formData.tipos
    };
    fetch('http://localhost:3001/pokemons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <div className={styles.formulariodiv} >
      <h3 className={styles.titulo}>crea tu propio pokemon</h3>
      <div className={styles.formulariobotondiv}>
      <button className={`${styles.boton} water`}>
        <Link to="/home" className={styles.link}>home</Link>
      </button>
       </div>
      
   <form className={styles.form} >
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required value={formData.nombre} onChange={handlechange} />

        <label for="imagen">Imagen:</label>
        <input type="text" id="imagen" name="imagen" required value={formData.imagen} onChange={handlechange} />
       

        <label for="vida">Vida:</label>
        <input type="number" id="vida" name="vida" required value={formData.vida} onChange={handlechange} />

        <label for="ataque">Ataque:</label>
        <input type="number" id="ataque" name="ataque" required value={formData.ataque} onChange={handlechange} />

        <label for="defensa">Defensa:</label>
        <input type="number" id="defensa" name="defensa" required value={formData.defensa} onChange={handlechange} />

        <label for="velocidad">Velocidad:</label>
        <input type="number" id="velocidad" name="velocidad" value={formData.velocidad} onChange={handlechange} />

        <label for="altura">Altura:</label>
        <input type="number" id="altura" name="altura" value={formData.altura} onChange={handlechange} />

        <label for="peso">Peso:</label>
        <input type="number" id="peso" name="peso" value={formData.peso} onChange={handlechange} />

        <label for="tipos">Tipos:</label>
        <select name="tipos" className={`${styles.boton} water`} value={formData.tipos} onChange={handlechange}>
          {types.map(type => {
            return (<option key={type} value={type}>{type}</option>)
          })}
        </select>
          
        <button onClick={handlesubmit} type="submit" className={`${styles.boton} water`}>Crear nuevo Pokémon</button>
      </form>

    </div>
  )
}