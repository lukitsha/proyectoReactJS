import classes from './ListadoCategorias.module.css'

const ListadoCategorias = () => {
    return (
        <body className={classes.body}>
            
            <div>
                <h4>Categorias:</h4>
                
                <li>Placas de Video</li>
                <li>Mouses</li>
                <li>Teclados</li>
                <li>otros</li>
            </div>
        </body>
    )
}

export default ListadoCategorias