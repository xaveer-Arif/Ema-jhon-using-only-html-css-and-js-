import React from 'react';
import "./Card.css"

const Card = ({card}) => {
    console.log(card)
    let totalPrice = 0;
    let shippingTotal = 0;

    for(const selectedProduct of card ){
        totalPrice= totalPrice + selectedProduct.price;
        shippingTotal = shippingTotal + selectedProduct.shipping
    }
    
    const tax = parseFloat((totalPrice * .10).toFixed(2))
    const grandTotal = totalPrice + shippingTotal + tax 
    return (
        <div className='card'>
            <h5>Order Summary</h5>
            <p>Selected Items: {card.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${shippingTotal}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            
        </div>
    );
};

export default Card;