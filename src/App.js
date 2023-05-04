import './App.css';
import React from 'react';
import MiNavbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <MiNavbar></MiNavbar>
      <h1>Bienvenidos a Candelitte Clothing</h1>
      <p>No puede dejar de aprovechar las ofertas imperdibles.</p>
      <ItemListContainer greeting="¡Hola, bienvenido a mi tienda en línea!" />
    </div>


  );
}

export default App;

