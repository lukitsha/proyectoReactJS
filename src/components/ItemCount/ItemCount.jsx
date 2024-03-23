import { useState } from "react";
import './ItemCount.module.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
 
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="botonDisminuir" onClick={decrement}> - </button>
                <h4 className="Number">{quantity}</h4>
                <button className="botonAumentar" onClick={increment}> + </button>
            </div>
            <div>
                <button className="botonCarrito" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount
