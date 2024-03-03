import classes from './ListadoCategorias.module.css'
import Button from '../Button/Button'

const ListadoCategorias = () => {
    return (
        <body className={classes.body}>
            
            <div>
                <h4>Categorias:</h4>
                
                <li><Button label='Placas de Video' bgColor='lightgrey' /></li>
                <li><Button label='Mouses' bgColor='lightblue' /></li>
                <li><Button label='Teclados' bgColor='lightgreen' /></li>
                <li><Button label='Otros' bgColor='lightpink' /></li>
            </div>
        </body>
    )
}

export default ListadoCategorias