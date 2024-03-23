import styles from './Item.module.css'; 
import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {

    return(
        <article className={styles.CardItem}> 
            <header className={styles.Header}> 
                <h2 className={styles.ItemHeader}> 
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} style={{ width: 175}} />
            </picture>
            <section>
                <p className={styles.Info}> 
                    Precio: U$D{price}
                </p>
                <p className={styles.Info}>
                    Cantidad en Stock: {stock}
                </p>
            </section>
            <footer>
                <button className='btn btn-dark'><Link to={`/item/${id}`}>Ver Detalle</Link></button>
            </footer> 
        </article>
    )
}

export default Item