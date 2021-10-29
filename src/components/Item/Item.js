import React from 'react'


//estilos
import "./Item.css";

const Item = ({data}) => {
    return (
            <article className="card">

                <div className="contenedorLogo">
                    <img className="logo" src={data.image} alt="imagen"/>
                </div>

                <div className="contenedorDescripcion">
                    <p className="nombre">{data.title}</p>
                    <p className="precio">{data.price}</p>
                </div>
                <div className="contenedorBoton">
                <button class="ui inverted primary button">Agregar</button>
                </div>
    
            </article>   
    )
}

export default Item