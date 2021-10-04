import "./CartWidget.css";
import React from 'react'
import img from '../../assets/carrito.png'

const CartWidget = () => {
    return (
        <div>
            <img src={img} width='70px' height='50px'/>
        </div>
    )
}

export default CartWidget
