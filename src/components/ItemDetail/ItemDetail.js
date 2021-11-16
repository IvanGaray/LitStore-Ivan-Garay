import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from 'react-bootstrap';
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";

import { Card, Image,Message,Label } from 'semantic-ui-react'



const ItemDetail = ({ product }) => {

  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useContext(CartContext);


  const counterHandler = (counter) => {  // ver esto
    setQuantity(counter);
  }

  const addProductToCart = () => {

    const existing = cart.find((p) => p.id === product.id)
    if (existing) {
      existing.quantity += quantity
      setCart([...cart])
    } else {
      setCart([...cart, { quantity: quantity, item: product }])
    }

    /* setCart([...cart, {quantity: quantity, item: product}]) */
    //agregar funcionalidad de si agrego el mismo producto que no me agregue de nuevo el producto, sino la cantidad
  }

  return (
    <div id='itemDetailed'>
      <Card className="detail-content" id='itemDetailed'>
        <Image className="imagenCard" id='images' src={product.image} wrapped ui={false} />
        <Card.Content>
        <Message size='small'> <Card.Header className="nombreCard">{product.productName}</Card.Header></Message>
        <Label >Precio: ${product.price}</Label>
          <Card.Meta>
            <p>{product.descripcion}</p>
            <Link to={`/category/${product.category}`}><Label as='a' color='red' tag><p>{product.category}</p></Label></Link>
            <br/>
            
          </Card.Meta>
        </Card.Content>
        <div className="image-detail">
          <div>
          <Message size='huge'><p>{product.description}</p></Message>
            <ItemCount maxValue={product.stock} minValue={1} initialValue={1} onAdd={counterHandler} />

            <Button className='ui secondary button small botonera'>
              <Link to={"/"}> Volver al listado </Link>
            </Button>

            <Button className='ui positive button small botonera' onClick={addProductToCart}>
              <Link to='/Cart'>Agregar al carrito </Link>
            </Button>

            
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ItemDetail;


/*
const addToCart = () => {
    const sameId = cart.some((element) => element.item.id === item.id);

    // Si el producto ya está agregado al carrito, aumenta la cantidad.
    if (sameId) {
      cart.forEach((element) => {
        if (element.item.id === item.id) {
          const newCart = cart.filter((el) => el.item.id !== item.id);
          setCart([
            ...newCart,
            {
              item: item,
              quantity: element.quantity + parseInt(counter),
            },
          ]);
        }
      });
    } else {
      // Si el producto no está agregado al carrito, lo añade.
      setCart([...cart, { item: item, quantity: parseInt(counter) }]);
    }
  };
*/