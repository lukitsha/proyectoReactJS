const Item = ({name, img, price }) => {
    return(
        <div >
            <h2>{name}</h2>
            <img src={img} style={{ width: 175 }}/>
            <h3>Precio: U$D {price}</h3>
        </div>
    )
}

export default Item