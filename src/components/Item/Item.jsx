const Item = ({id, name, img, price }) => {
    return(
        <div >
            <h2>{name}</h2>
            <img src={img} style={{ width: 175 }}/>
            <h3>Precio: U$D {price}</h3>
            <button>Ver Detalle</button>
        </div>
    )
}

export default Item