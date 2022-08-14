import React, { useEffect,useState } from 'react';
import { addToDb, getDataFromDB } from '../../utilities/fakedb';
import Card from './Card/Card';
import Product from './Product/Product';
 
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [card, setCard] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
// console.log(card)
   useEffect( () => {
        const savedProductId = getDataFromDB()
        const savedCard = []
        for(const id in savedProductId){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const number = savedProductId[id]
            addedProduct.quantity= number
            savedCard.push(addedProduct)
            // console.log(number)
        }
    }
    setCard(savedCard)
    
    },[products])
    
    const productHandler = (selectedProduct) => {
        const exists = card.find(product => product.id === selectedProduct.id)
        let newCard = []
        if(!exists){
            selectedProduct.quantity = 1;
            newCard = [...card, selectedProduct]
        }
        else{
            const rest = card.filter(product => product.id !== selectedProduct.id)
            console.log(rest)
            exists.quantity = exists.quantity + 1;
            newCard = [...rest, exists]
            console.log(newCard)
            console.log(exists.quantity)
        }
        setCard(newCard) 
        addToDb(selectedProduct.id)
        
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
                <Card card={card}></Card>
            </div>
        </div>
    );
};


/* let saveCart = []
for(const id in savedProductId){
    const savedProduct = products.find(product => product.id === id)
    saveCart=[...card, savedProduct]
    // setCart(saveCart)
}
// console.log(saveCart) */
export default Shop;