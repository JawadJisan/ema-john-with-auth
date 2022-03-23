import React, { useEffect, useState } from 'react';
import {addToDb, getStoredcart} from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]  = useState([]);

    useEffect(() =>{
        // console.log('products loads before fetch')
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            //  console.log('products loaded')
        })
    },[])

   useEffect(()=>{
    //    console.log('Local storage first line')
        const storedCart = getStoredcart();
        const saveCart = [];
        
        for (const id in storedCart) {
            const addedProduct = products.find(product=>product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        // console.log('local storage finished');
        setCart(saveCart);
   },[products])

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct)
        // do not do this: cart.push(product)
        let newCart = []
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product=>product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                } 
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
    

        </div>
    );
};

export default Shop;