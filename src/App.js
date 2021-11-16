import React from "react";
import NavBar from "./Containers/NavBar/NavBar";
import Home from "./Containers/Home/Home";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {CartProvider} from './components/context/CartContext'
import "./App.css";
import { AppContext, AppProvider } from "./components/context/AppContext";
import CategoryContainer from "./Containers/CategoryContainer/CategoryContainer";

function App() {

  return (
    <AppProvider>
    <CartProvider>  
      <BrowserRouter>
        {/* NavBar */}
        <NavBar />

        <Switch>
          <div className="App">
            {/* // Start Containers // */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/category/:id">
                <CategoryContainer/>
            </Route>

            <Route exact path="/detail/:id">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/Cart">
              <Cart />
            </Route>

            {/* End Containers */}
          </div>
        </Switch>
        {/* Footer */}
      </BrowserRouter>
    </CartProvider>  
    </AppProvider>
  );
}

export default App;
