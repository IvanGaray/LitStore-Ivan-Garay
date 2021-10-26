import React,{createContext,useState} from 'react'


export const cartContex = createContext(); 


 export const CartProvider = ({children}) => {
    const [items,setItems] = useState([]); 

    const addItem = (nuevoItem,cantidad)=>{
        const index = items.findIndex(i => i.item.id === nuevoItem.id);

        if (index === -1 && existe === false) {
            const listaNuevoItems = [...items,{item:nuevoItem,cantidad}]
            setItems(listaNuevoItems);
        }
        else{
            const nuevaCantidad = items[index].cantidad + cantidad;
            const listaEdit = items.filter(i => i.item.id !== items[index].item.id)
            const listaFinal = [...listaEdit, { item: items[index].item, cantidad: nuevaCantidad}]
            setItems(listaFinal)
        }
    }

    const existe = (id) => {

        let esta= false;
        const item = items.filter(i => i.item.id === id);

        if ( item.length > 0 ) {
            esta = true;
        }

        return esta;
    }

    const borrarTodo = () => {
        setItems([])
    }

    return (
        <div>
            <cartContex.Provider value={{
                addItem:addItem,
                borrarTodo:borrarTodo
            }

            }>
             {children}
            </cartContex.Provider>
        </div>
    )
}

export default CartProvider