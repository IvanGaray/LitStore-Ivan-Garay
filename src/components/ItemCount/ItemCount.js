import React,{useState} from 'react';

//css
import "./ItemCount.css";

const ItemCount = ({stock,initial,onClick}) => {

    const [contador,setContador] = useState(parseInt(initial));

    const incrementar = ()=>{
        if (contador < stock) {
            setContador(contador + 1)
        }  
    };
    
    const desIncrementar = ()=>{
        if (contador > 0 ) {
            setContador(contador - 1)
        }   
    };

    return (
        <div className="contenedorContador">
            
        <button className="mini ui negative button" onClick={desIncrementar}>-</button>
        <div class="mini ui secondary button disable" style={{"padding" : "10px"}}>{contador}</div>
        
        <button className="mini ui positive button" onClick={incrementar}>+</button> 
        <button className="ui inverted green button" onClick={()=>onClick(contador)}>Agregar Carrito</button>
    </div>
    )
}
export default ItemCount;