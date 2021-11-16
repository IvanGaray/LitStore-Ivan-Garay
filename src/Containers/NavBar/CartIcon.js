import {useContext} from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {CartContext} from '../../components/context/CartContext'
import './CartIcon.css';

const CartIcon = () => {

    const [cart] = useContext(CartContext);

    const getQuantity = () => {
        let counterProduct = 0;
        cart.forEach(order => { counterProduct += order.quantity });
        return counterProduct;
    }

    return (
        <div>
            <Link to='/Cart'>  <FiShoppingCart className="cart-icon"/>
               <a class="ui red circular label small">{getQuantity()} </a>    
               
            </Link>
        </div>
    )
}

export default CartIcon