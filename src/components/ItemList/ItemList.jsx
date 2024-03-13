const ItemList = ( {products} ) => {
    return (
        <div>
            {
                products.map(product =>{
                    return (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <img src={product.img} style={{ width: 175 }}/>
                            <h3>Precio: U$D {product.price}</h3>
                        </div>
                    )       
                })
            } 
        </div>
    )
}

export default ItemList