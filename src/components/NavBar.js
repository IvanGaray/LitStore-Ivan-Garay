import "./NavBar.css";
import React from 'react'
import logo from '../assets/logo.png'
import CartWidget from '../components/CartWidget/CartWidget'

const NavBar = () => {
    return (

        <div>


            <nav className="NavBar">
                <CartWidget />
                <img className='logo' src={logo} width='70px' height='50px' />

                <div className="">

                    <ul className="">
                        <li className="">
                            <a className="" href="#">Inicio</a>
                        </li>
                        <li className="">
                            <a className="" href="#">Productos</a>
                        </li>
                        <li className="">
                            <a className="" href="#">Servicios</a>
                        </li>
                    </ul>

                </div>

            </nav>

        </div>
    )
}

export default NavBar
