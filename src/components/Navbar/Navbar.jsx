import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header className={classes.header}>
            
            <nav>
                <h4>Navbar</h4>
                
                <a href="" className='btn btn-secondary'>Placas de Video</a>
                <a href="" className='btn btn-secondary'>Mouse</a>
                <a href="" className='btn btn-secondary'>Teclados</a>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar