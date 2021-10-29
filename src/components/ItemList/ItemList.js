import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';

//css
import "./ItemList.css"
//router
import { Link } from 'react-router-dom';
//axios
import axios from 'axios';
//components
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
                .filter(p =>filtro==="Todo" || filtro === p.category)
                .map(p=>{
                    return(
                        <Link to={`/detail/${p.id}`}>
                            <Item  data={p}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ItemList;
