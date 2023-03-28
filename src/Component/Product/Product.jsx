import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {


    const {img,name,price,seller,ratings,id} =  props.product;
    const handle_add_to_cart = props.handle_add_to_cart;
    return (
        <div className='product'>
            <div className="product-main">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price : {price}</h4> 
            </div>

            <div className='pr-content'>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} star</p>
            </div>
            
            <div className="product-btn">
            <button   onClick={() => handle_add_to_cart(props.product)}>Add to Cart 
            <FontAwesomeIcon style={{padding:'0 20px'}}  icon={faShoppingCart} />

            </button>
            </div>
        </div>
    );
};

export default Product;