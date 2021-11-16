import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Formulario } from '../../components/Form/Form';
import { getFirestore } from '../../firebase/index';
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);//  agregar setCart para eliminar, editar items
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState("");



  useEffect(() => {
    let totalCart = 0;
    cart.forEach((cartItem) => {
      /* totalCart += cartItem.quantity * cartItem.item.price */ //misma resolucion
      totalCart = totalCart + cartItem.quantity * cartItem.item.price
    })
    setTotal(totalCart);
  }, [cart]);


  // obtener total de compra
  const getGrandTotal = () => {
    return cart.reduce((acc, p) => (acc += p.item.price * p.quantity), 0);
  };

  // borrar productos 
  const deleteProduct = (id) => {
    cart.splice(
      cart.findIndex((p) => p.id === id),
      1
    );

    setCart([...cart]);

  };


  const addOrder = (dataBuyer) => {
    let newOrder = {
      buyer: dataBuyer,
      items: cart,
      date: Date.now(),  // investigar dar formato a date
      total: total
    }
    const db = getFirestore();

    db.collection("orders")
      .add(newOrder)
      .then(function (docRef) {
        setOrderId(docRef.id);
        alert("El Id de tu compra es: " + docRef.id);

      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
  return (
    //traer el valor del itemCounter, producto, detalle de lo que compra y medios de pago

    <div className="cart-section">

<h2> Productos en carrito </h2>


{cart.map((item) => (
      <article>
        <div>
          <img className="logo" src={item.item.image} alt="imagenItem" />
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
                <td data-label="Nombre">{item.item.productName}</td>
                <td data-label="Precio">{item.item.price}</td>
                <td data-label="cantidad">{item.quantity}</td>
                
              </tr>

            </tbody>
          </table>
         
        </div>
        <div>
          <button class="ui secondary button" onClick={() => { deleteProduct(item) }}>Eliminar</button>
          <br />
        </div>
      </article>
))}
           
      <h3>Total de su orden ${getGrandTotal()}</h3>
      
      <Formulario addOrder={addOrder} />
      <br />
      <button class="ui red button" onClick={deleteProduct}>Borrar</button>
    </div>
  );
};

export default Cart;
