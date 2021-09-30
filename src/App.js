import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import React from 'react';
import { render } from '@testing-library/react';

//Components



function App() {
  return (
    <div className="App">
 <NavBar/>
 <ItemListContainer 
 greeting='Ivan Garay estuvo aquí.!'/>

</div>
);
}
export default App;



