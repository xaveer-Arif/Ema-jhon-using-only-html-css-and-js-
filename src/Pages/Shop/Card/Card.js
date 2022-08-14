import React from 'react';
import "./Card.css"

const Card = ({card}) => {
    let totalPrice = 0;
    let shippingTotal = 0;
    let quantity = 0;

    for(const product of card ){
        quantity = quantity + product.quantity
        totalPrice= totalPrice + (product.price * product.quantity);
        shippingTotal = shippingTotal + product.shipping
    }
    
    const tax = parseFloat((totalPrice * .10).toFixed(2))
    const grandTotal = totalPrice + shippingTotal + tax 
    // console.log(quantity )
    return (
        <div className='card'>
            <h5>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${shippingTotal}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            
        </div>
    );
};

export default Card;