import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './componest/landing/Landing';
import Details from './componest/deatail/Details';
import Fomr from './componest/fomr/Fom';
import { useEffect } from 'react';
import { getpokemonsDetailaction } from "./redux/actions"
import {  useDispatch } from 'react-redux';
import Homecomponent from './componest/home/homecomonent/homecomponent';
import { getPokemon,  } from './redux/api';

function App() {
  
  const dispatch = useDispatch();


  useEffect(() => {
    const fectpo = async () => {
      const pokeres = await getPokemon();
      dispatch  ( getpokemonsDetailaction( pokeres))
    };
    fectpo();
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