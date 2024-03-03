import classes from './ListadoCategorias.module.css'
import Button from '../Button/Button'

const ListadoCategorias = () => {
    return (
        <body className={classes.body}>
            
            <div>
                <h4>Categorias:</h4>
                
                <li><Button label='Placas de Video' fontColor='black' bgColor='lightgrey' className='btn btn-dark' callback={() => console.log('te llevaria a la seccion de Placas de Video')} /></li>
                <li><Button label='Mouses' fontColor='black' bgColor='lightblue' className='btn btn-dark' callback={() => console.log('te llevaria a la seccion de Mouses')} /></li>
                <li><Button label='Teclados' fontColor='black' bgColor='lightgreen' className='btn btn-dark' callback={() => console.log('te llevaria a la seccion de Teclados')} /></li>
                <li><Button label='Otros' fontColor='black' bgColor='lightpink' className='btn btn-dark' callback={() => console.log('te llevaria a la seccion de Otros')} /></li>
            </div>
        </body>
    )
}

export default ListadoCategorias