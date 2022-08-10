import React, { useEffect,useState } from 'react';
import Card from './Card/Card';
import Product from './Product/Product';
 
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [card, setCart] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])
    
    const productHandler = (product) => {
        const newProduct = [...card, product]
        setCart(newProduct)
    }
 
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        product={product}
                        productHandler={productHandler}
                    key ={product.id}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
            <h1>Card: {card.length}</h1>
            </div>
        </div>
    );
};

export default Shop;