import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import  Crear from './componest/home/botones/crear';

describe('crear boton', () => {
 test("crear boton", ()=>{
  render(<Router>< Crear/></Router>)
  
 })
});