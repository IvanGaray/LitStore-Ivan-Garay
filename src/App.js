import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

//componentes
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import cart from './Views/cart/Cart';
import ItemList from "./components/ItemList/ItemList"


function App() {
  return (

    <div className="App">

           

      <Router>

        <NavBar/>

        <Switch>

          <Route exact component={ItemList} path="/" />
          <Route  component={ItemListContainer} path="/Inicio" />
          <Route  component={ItemList} path="/categories/:categoriaId" />
          <Route  component={ItemDetailContainer} path="/detail/:id" />
          <Route  component={cart} path="/cart" />
        
        </Switch>


      </Router>

       

        
       

        
        
        
    </div>
  );
}

export default App;


