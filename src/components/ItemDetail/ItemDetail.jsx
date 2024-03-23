import ItemCount from "../ItemCount/ItemCount";
import styles from '../ItemDetail/ItemDetail.module.css';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className={styles.CardItem}>
            <header className={styles.Header}>
                <h2 className={styles.ItemHeader}>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className={styles.ItemImg} />
            </picture>
            <section>
                <p className={styles.Info}>
                    Categoria: {category}
                </p>
                <p className={styles.Info}>
                    Descripción: {description}
                </p>
                <p className={styles.Info}>
                    Precio: {price}
                </p>
            </section>
            <footer className={styles.ItemFooter}>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agrgada " , quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail;