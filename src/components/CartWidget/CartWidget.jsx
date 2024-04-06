import { useContext } from 'react'
import shoppingcart from './assets/shoppingcart.png'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <button>
            <img src={shoppingcart}/>
            { totalQuantity }
        </button>
    )
}

export default CartWidget