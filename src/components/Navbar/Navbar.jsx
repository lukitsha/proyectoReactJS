import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header className={classes.header}>
            
            <nav className='NavBar'>
                <link>
                </link>
                <div className='Categories'>
                    <a href="/" className='btn btn-secondary'>Home</a>
                    <a href="/category/placasDeVideo" className='btn btn-secondary'>Placas de Video</a>
                    <a href="/category/vapes" className='btn btn-secondary'>Vapes</a>
                    <a href="/category/otros" className='btn btn-secondary'>Otros</a>
                    <CartWidget />
                </div>

                
            </nav>
        </header>
    )
}

export default Navbar