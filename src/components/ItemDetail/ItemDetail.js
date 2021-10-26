import React,{useState,useContext} from 'react'
 import { Card,Image } from 'semantic-ui-react'

 import { Link } from 'react-router-dom';
 import "./ItemDetail.css";
 

 //componentes
 import ItemCount from '../ItemCount/ItemCount';


 const CardExampleCard = ({d}) =>{ 
   
    const [cantProductos,setCantProductos]=useState(0);
    const [confirmar,setConfirmar] = useState(false)
    

    const onAdd =(cantidad)=>{
        setCantProductos(cantidad)
        setConfirmar(true)
    }

    
  
      return(

        <Card className="cardDetail">
          <Image className="imagenCard" src={d.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header className="nombreCard">{d.title}</Card.Header>
            <Card.Meta>
              <p>{d.category}</p>
              <span className='date'>{d.price}</span>
            </Card.Meta>
            <Card.Description>
              {d.description}
            </Card.Description>
          </Card.Content>
              
          {confirmar? <Link to="/cart"><button class="ui blue button" >Terminar mi compra</button></Link> :<ItemCount stock="5" initial="1" onClick={(cantidad)=>onAdd(cantidad)}/>}
        </Card>
 )
 }
 export default CardExampleCard



