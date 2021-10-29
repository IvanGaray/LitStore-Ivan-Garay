
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

//components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Carrito from './Views/cart/Cart';
import ItemList from "././components/ItemList/ItemList"
//context
import {CartProvider} from "./components/context/CartContext"


function App() {
  return (

    <div className="App">

     
      

      <Router>
        <CartProvider>

          <NavBar/>

          <Switch>

            <Route exact component={ItemList} path="/" />
            <Route  component={ItemListContainer} path="/Inicio" />
            <Route  component={ItemList} path="/categories/:categoriaId" />
            <Route  component={ItemDetailContainer} path="/detail/:id" />
            <Route  component={Carrito} path="/cart" />
        
          </Switch>

        </CartProvider>
      </Router>
       

        
       

        
        
        
    </div>
  );
}

export default App;