const products = [

    {
        id: '1',
    
        name: 'RTX 3080 ti',
    
        price: '950',
    
        category: 'Placas de Video',
    
        img: 'https://i.blogs.es/62bbb4/nvidiartx3080tiap/840_560.jpeg',
    
        stock: '13',
    
        description: 'La tarjeta gráfica GeForce RTX® 3080 Ti ofrece el rendimiento perfecto que buscan los jugadores, con la tecnología de Ampere, la arquitectura RTX de 2.ª generación de NVIDIA.',
    },
    
    {
        id: '2',
    
        name: 'RTX 4060 ti',
    
        price: '1250',
    
        category: 'Placas de Video',
    
        img: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4060-4060ti/geforce-rtx-4060-ti-og-1200x630.jpg',
    
        stock: '9',
    
        description: 'La GeForce RTX 4060 Ti te permite ejecutar las últimas aplicaciones de juegos con la arquitectura ultraeficiente NVIDIA Ada Lovelace. ',
    },
    
    {
        id: '3',
    
        name: 'RTX 4070 Super',
    
        price: '1600',
    
        category: 'Placas de VIdeo',
    
        img: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/40-series/rtx-4070-4070ti/geforce-rtx-4070-super-og-1200x630.jpg',
    
        stock: '24',
    
        description: 'La GeForce RTX 4070 super Se diseñó con la arquitectura NVIDIA Ada Lovelace ultraeficiente. Experimenta el ray tracing súper rápido, el rendimiento acelerado por IA con DLSS 3',
    },
    
    {
        id: '4',
    
        name: 'RTX 4090',
    
        price: '2300',
    
        category: 'Placas de Video',
    
        img: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg',
    
        stock: '17',
    
        description: 'NVIDIA® GeForce RTX® 4090 es la GPU GeForce definitiva. Brinda un gran salto en rendimiento, eficiencia y gráficos impulsados ​​​​por IA. ',
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
           
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}