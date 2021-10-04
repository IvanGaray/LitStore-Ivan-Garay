import './App.css';
import React from 'react';
import { render } from '@testing-library/react';


//Components
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        greeting='Ivan Garay estuvo aquí.!' />
      <ItemCount stock='5' initial='1' />

    </div>
  );
}
export default App;



