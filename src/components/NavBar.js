import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png'
import {Image} from 'semantic-ui-react'
//router
import { Link } from "react-router-dom";
//componentes
import CartWidget from "./CartWidget/CartWidget";


const NavBar = () => {

    return (
        <header className="header">
             <Link to="/"><Image src={logo} circular style={{"width" : "100px"}} /></Link>
            <Link to="/"><h1>Lit Store</h1></Link>

            <div>
                <ul className="categorias">
                    <Link to={`/categories/${"Todo"}`}><li> <button class="ui inverted blue button">Todo</button></li></Link>
                    <Link to={`/categories/${"women's clothing"}`}><li><button class="ui inverted blue button">Ropa</button></li></Link>
                    <Link to={`/categories/${"jewelery"}`}><li>  <button class="ui inverted blue button">Accesorios</button></li></Link>
                    
                </ul>
            </div>

            <nav className="navs">
                <ul className="lista">
                    <Link to="/"><li><button class="ui secondary button">Inicio</button></li></Link>
                    <Link to="/"><li><button class="ui secondary button">Productos</button></li></Link>
                    <Link to="/cart"><li className="cart"><CartWidget /></li></Link>
                </ul>
            </nav>
        </header>
    );

};

export default NavBar;

