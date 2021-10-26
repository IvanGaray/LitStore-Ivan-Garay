import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import gamesData from '../gamesData.json'
//css
import "./ItemList.css"
//router
import { Link } from 'react-router-dom';
//axios
import axios from 'axios';
//componentes
import Item from '../Item/Item';

const ItemList = () => {

    const [productos,setProductos] = useState([]);
    let objFiltro = useParams();
    let filtro = objFiltro.categoriaId || "Todo";

    useEffect(()=>{
       axios("https://fakestoreapi.com/products").then(res=>{
           setProductos(res.data)
       })
        

    },[])

    return (
        <div className="items">
            
            <h2>Productos</h2>
            {
                
                productos
                .filter(e =>filtro==="Todo" || filtro === e.category)
                .map(e=>{
                    return(
                        <Link to={`/detail/${e.id}`}>
                            <Item  data={e}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ItemList;
