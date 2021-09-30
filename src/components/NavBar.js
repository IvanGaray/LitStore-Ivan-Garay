import "./NavBar.css";
import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <div>
            <img src={logo} width='70px' height='50px'/>
           <div className="brand">LitStore</div>
            
        <nav className="NavBar">
        

            <div class="">
            
                <ul class="">
                    <li class="">
                        <a class="" href="#">Inicio</a>
                    </li>
                    <li class="">
                        <a class="" href="#">Productos</a>
                    </li>
                    <li class="">
                        <a class="" href="#">Servicios</a>
                    </li>
                </ul>

            </div>

        </nav>
        
        </div>
    )
}

export default NavBar
