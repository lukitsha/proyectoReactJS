import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const Checkout = () => {
    const { cart, totalQuantity } = useContext(CartContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const order = {
            buyer: { name, email, address },
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        }

        try {
            const docRef = await addDoc(collection(db, "orders"), order)
            console.log("Order placed with ID: ", docRef.id)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} />
                <button type="submit">Finalizar Compra</button>
            </form>
            <div>
                <h2>Resumen de la Compra</h2>
                <p>Total de artículos: {totalQuantity}</p>
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>{item.name} x {item.quantity} - ${item.price * item.quantity}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Checkout
