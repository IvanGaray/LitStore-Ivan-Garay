import React, { useContext } from 'react';
//css
import "./ProductsCart.css"
//context
import { cartContext } from '../context/CartContext';

const ProductsCart = () => {

    const { items, eliminarItem } = useContext(cartContext);
    return (
        <div>
            {
                items.map(i => {

                    return (
                        <article>
                            <div>
                                <img className="logo" src={i.item.image} alt="imagenItem" />
                            </div>
                            <div>



                                <table class="ui celled table">
                                    <thead>
                                        <tr><th>Nombre</th>
                                            <th>Precio</th>
                                            <th>cantidad</th>
                                        </tr></thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Nombre">{i.item.title}</td>
                                            <td data-label="Precio">{i.item.price}</td>
                                            <td data-label="cantidad">{i.cantidad}</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <p>Nombre:{i.item.title}</p>
                                <p>Precio:{i.item.price}</p>
                                <p>cantidad:{i.cantidad}</p>
                            </div>
                            <div>
                                <button className="ui secondary button" onClick={() => { eliminarItem(i) }}>Eliminar</button>
                                <br />
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default ProductsCart