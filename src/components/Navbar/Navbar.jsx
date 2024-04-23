import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { QuerySnapshot, collection, getDocs } from 'firebase/firestore'
import { db } from'../../services/firebase/firebaseConfig'

const Navbar = () => {

    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesCollection = collection(db, 'categories')
        

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.doc.map(doc => {
                    const data =doc.data()
                    return{ id: doc.id, ...data}
                })
                setCategories(categoriesAdapted)
            })
            
    }) 

    return (
        <header className={classes.header}>
            <h2 onClick={() => navigate('/')} className='tituloNav'>LeketsElectronics</h2>
            <nav className='NavBar'>
                <button className='btn btn-secondary'><Link to='/category/placasDeVideo'>Placas de Video</Link></button>
                <button className='btn btn-secondary'><Link to='/category/vapes'>Vapes</Link></button>
                <button className='btn btn-secondary'><Link to='/category/otros'>Otros</Link> </button>
            </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar