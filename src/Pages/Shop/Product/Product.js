import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = ({product, productHandler}) => {
    const {price, name, img, ratings, stock, seller} = product
    // console.log(props.product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="productInfo">
            <h6 className='productName'>{name}</h6>
            <p className='productPrice'>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p className='productRating'>Ratings: {ratings}</p>
            </div>
            <button 
            className='productButton'
            onClick={() => productHandler(product)}
            >Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            
        </div>
    );
};

export default Product;