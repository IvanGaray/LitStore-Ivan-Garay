import { useState, useEffect } from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemCount(props) {
    const {stock, initial, onAdd} = props.props;
    const [cantidad, setCantidad] = useState(initial);
    const [actualStock, setActualStock] = useState(stock);


    const add = () => {
        if (cantidad <= stock - 1) {
            setCantidad(cantidad + 1);
        }
    };
    const substract = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <>
            <span>Unidades en Stock : {actualStock}</span>
            <InputGroup className='mb-3 form-calculator-minmax'>
                <Button
                    variant='outline-secondary'
                    id='button-addon1'
                    onClick={substract}
                >
                    -
                </Button>
                <FormControl
                    arial-label='example text'
                    arial-aria-describedby='basic-addon1'
                    value={cantidad}
                    readOnly
                />

                <Button variant='outline-secondary' id='button-addon1' onClick={add}>
                    +
                </Button>
            </InputGroup>

            <Button
                variant='primary'
                onClick={() => {
                    actualStock >= cantidad &&
                        setActualStock(onAdd(actualStock, cantidad));
                    cantidad > actualStock &&
                        alert('¡No hay stock suficiente!');
                }}
            >
                Agregar al carrito
            </Button>



        </>
    )


}






export default ItemCount;
