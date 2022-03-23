import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const handleAdd = () =>{console.log('fasf')}
<button onClick={()=>handleAdd()}></button>

const Product = (props) => {
    // console.log(props)
    // const {product ,handleAddToCart} = props;
    const {name, img, seller, price, ratings} = props.product;
    // const {name, img, seller, price, ratings} = product;
    return (
        <div className='product'>
            {/* <h3>This is Product</h3> */}
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{name} </p>
            <p>Price:{price} </p>
            <p> <small>Seller:{seller}</small> </p>
            <p> <small>Raitings:{ratings}</small> </p>
            </div>
            <button  onClick={()=> props.handleAddToCart(props.product)} className='btn-cart'>
            {/* <button  onClick={()=> handleAddToCart(product)} className='btn-cart'> */}
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;