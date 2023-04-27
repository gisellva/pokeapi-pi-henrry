import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './componest/landing/Landing';
import Details from './componest/deatail/Details';
import Fomr from './componest/fomr/Fom';
import { useEffect } from 'react';
import { setpokemons } from "./redux/actions"
import {  useDispatch } from 'react-redux';
import Homecomponent from './componest/home/homecomonent/homecomponent';



function App() {
  
  const dispatch =useDispatch();


  useEffect(() => {
  fetch('http://localhost:3001/pokemons')
  .then(response => response.json())
  .then(response => dispatch(setpokemons(response)))
  .catch(err => console.error(err))
    
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='home' element={<Homecomponent  />} />
        <Route path='details/:detailsname' element={<Details />} />
        <Route path='form' element={<Fomr />} />
      </Routes>
    </div>
  );
}



export default App;