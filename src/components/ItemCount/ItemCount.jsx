import { useState } from "react";
import styles from './ItemCount.module.css'; // Importa el archivo CSS

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
        <div className={styles.Counter}> {/* Usa la variable styles para aplicar los estilos */}
            <div className={styles.Controls}> {/* Usa la variable styles para aplicar los estilos */}
                <button className={styles.botonDisminuir} onClick={decrement}> - </button>
                <h4 className={styles.Number}>{quantity}</h4>
                <button className={styles.botonAumentar} onClick={increment}> + </button>
            </div>
            <div>
                <button className={styles.botonCarrito} onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;