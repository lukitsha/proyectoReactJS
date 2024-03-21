import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header className={classes.header}>
            
            <nav>
                <h4>Navbar</h4>
                <a href="/" className='btn btn-secondary'>Home</a>
                <a href="/Placas-de-Video" className='btn btn-secondary'>Placas de Video</a>
                <a href="/Vapes" className='btn btn-secondary'>Vapes</a>
                <a href="/otros" className='btn btn-secondary'>Otros</a>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar