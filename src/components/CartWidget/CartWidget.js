
import "./CartWidget.css";
import img from '../../assets/carrito.png';
import ItemCount from '../ItemCount/ItemCount'
const CartWidget = ()=>{

    return(
        <div className="contenedor">
             <img className="imagen" src={img} alt="logoCarrito" />
           
        </div>
    );

};
export default CartWidget;