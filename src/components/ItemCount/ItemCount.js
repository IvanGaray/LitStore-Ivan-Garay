import React, { useState } from 'react'
import './ItemCount.css'
import 'bootstrap/dist/css/bootstrap.min.css';




const ItemCount = ({ initial, stock }) => {

    const [counter, setCounter] = React.useState(parseInt(initial));

    const handleIncrement = () => {
        if (stock > counter) {
            setCounter(counter + 1);
        } else {
            console.log('No hay suficiente stock')
        }
    }

    const handleDecrement = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }
    const onAdd=()=>{
        
        console.log(`Se ha agregado `+ counter)
    }

    return (
        <div className='itemCount'>

            <button className="btn btn-danger btn-lg" onClick={handleDecrement}>-</button>
            <button className="btn btn-success btn-lg" onClick={handleIncrement}>+</button>
            <div className="counter">
                <p>{counter}</p>
            </div>
            <button className="btn btn-dark btn-lg" onClick={onAdd}>Agregar al carrito</button>

            <p>Stock Disponible: {stock} </p>
        </div>

    )
}

export default ItemCount
