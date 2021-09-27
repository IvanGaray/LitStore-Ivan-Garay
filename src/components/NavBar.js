import "./NavBar.css";
import React from 'react'

const NavBar = () => {
    return (
        <nav className="NavBar">
        
  
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Productos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Servicios</a>
      </li>
    </ul>
    
  </div>

        </nav>
    )
}

export default NavBar
