import './App.css';
import React from 'react';
import { render } from '@testing-library/react';


//Components
import NavBar from './components/NavBar'
import Carousel from './components/carousel/Carousel'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel/>
      <ItemListContainer />
      

    </div>
  );
}
export default App;

