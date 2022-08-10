import React from 'react';

const Card = (props) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Purchase: {props.card.length}</h4>
        </div>
    );
};

export default Card;