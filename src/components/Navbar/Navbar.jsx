import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <header className={classes.header}>
            
            <nav>
                <h4>Navbar</h4>
                
                <a href="" className='btn btn-secondary'>Placas de Video</a>
                <a href="" className='btn btn-secondary'>Mouse</a>
                <a href="" className='btn btn-secondary'>Teclados</a>
            </nav>
        </header>
    )
}

export default Navbar