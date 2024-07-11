import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import styles from "./Checkout.module.css";

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
        <div className={styles.checkoutContainer}>
            <h1 className={styles.checkoutHeader}>Checkout</h1>
            <form className={styles.checkoutForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <button type="submit">Finalizar Compra</button>
            </form>
            <div className={styles.summaryContainer}>
                <h2 className={styles.summaryHeader}>Resumen de la Compra</h2>
                <p>Total de artículos: {totalQuantity}</p>
                <ul>
                    {cart.map(item => (
                        <li key={item.id} className={styles.summaryItem}>
                            <div className={styles.productDetails}>
                                <img src={item.img} alt={item.name} className={styles.productImage} />
                                <span>{item.name} x {item.quantity}</span>
                            </div>
                            <span>${item.price * item.quantity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Checkout
