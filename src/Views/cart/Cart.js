import React, { useContext } from 'react'
import "./Cart.css"


//router
import { Link } from 'react-router-dom'
//Components
import ProductsCart from '../../Components/ProductsCart/ProductsCart'
//context
import { cartContext } from '../../Components/context/CartContext'

const Carrito = () => {
    const { items, cantidadItems, PrecioTotal, cantidad, borrarTodo } = useContext(cartContext)

    return (
        <div>
            <h2 className="titulo">Bienvenido al carrito </h2>
            <div class="ui divider"></div>

            {items.length === 0 ?
                <div>
                    <h2>no hay productos en el carrito</h2>
                    <Link to="/Inicio">
                        <button className="ui primary button">
                            Ver Productos
                        </button>
                    </Link>

                </div>
                :

                <div>
                    <h2>Cantidad de productos: {cantidadItems()}</h2>
                    <ProductsCart />

                   

                        <p>Total: ${PrecioTotal()}</p>



                    <button className="ui red button" onClick={() => borrarTodo()}>Borrar Todo</button>

                </div>








            }
        </div>
    )
}

export default Carrito