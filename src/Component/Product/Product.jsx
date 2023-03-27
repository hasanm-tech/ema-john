import React from 'react';
import './Product.css'

const Product = (props) => {

    const {img,name,price,seller,ratings,} =  props.product;
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
            <button>Add to Cart </button>
            </div>
        </div>
    );
};

export default Product;