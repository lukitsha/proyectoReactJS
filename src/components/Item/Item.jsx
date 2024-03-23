import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} style={{ width: 175 }} />
            </picture>
            <section>
                <p className="Info">
                    Precio: U$D{price}
                </p>
                <p className="Info">
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