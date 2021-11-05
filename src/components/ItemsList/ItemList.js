import Item from '../Item/Item';
//import '.ItemList.css'

const ItemList = ({ items }) => {
    // Recibir los items y hacemos un map 
    return (
        <div id="ItemList" className="item-container">
            {items?.map((item, idx) => {
                return(
                    <Item key={idx} item={item}/>
                )
            })}
        </div>
    )
}

export default ItemList;