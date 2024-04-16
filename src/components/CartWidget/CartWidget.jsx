import { useContext } from 'react'
import shoppingcart from './assets/shoppingcart.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link>
            <img src={shoppingcart}/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget