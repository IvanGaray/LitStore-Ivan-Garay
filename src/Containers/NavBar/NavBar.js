import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from '../../assets/logos.png';
import {Image} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Icon from "./Icon";
import CartIcon from "../NavBar/CartIcon";
import "./NavBar.css";
// <NavLink to="/cart"></NavLink> agregar el cartIcon aqui

const NavBar = () => {
  return (
    <header className="header">
    <Link to="/"><Image src={logo} circular style={{"width" : "70px", "height":"70px"}} /></Link>
   <Link to="/"><h1>Lit Store</h1></Link>

   <div>
       <ul className="categorias">
       <Link to={`/`}><li> <button class="ui inverted blue button">Todo</button></li></Link>
           <Link to={`/category/${"PS3"}`}><li><button class="ui inverted blue button">PS3</button></li></Link>
           <Link to={`/category/${"PC"}`}><li><button class="ui inverted blue button">PC</button></li></Link>
           <Link to={`/category/${"Xbox"}`}><li>  <button class="ui inverted blue button">Xbox</button></li></Link>
           
           
       </ul>
   </div>

   <nav className="navs">
       <ul className="lista">
           <Link to="/"><li><button class="ui secondary button">Inicio</button></li></Link>
           <Link to="/"><li><button class="ui secondary button">Productos</button></li></Link>
           <CartIcon className="cart-icon" />
       </ul>
   </nav>
</header>
  );
};

export default NavBar;
