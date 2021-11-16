import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
 
  return (
       
    <div id="Item">

      <Link to={"/detail/" + item.id} className="btn-buy">
        <article className="card">

          <div className="contenedorLogo">


          <img className='logo' src={item.image}/>

          </div>

          <div className="contenedorDescripcion">
            <div class="ui black label small">
              <p className="nombre">{item.productName}</p></div>
            
            <p className="precio ui label">Precio ${item.price}</p>
            
            <p className='description'>{item.description}</p>
            
            <button className="buy ui inverted primary button">
              Comprar
            </button>
          </div>
        </article></Link>


    </div>
  );
};

export default Item;