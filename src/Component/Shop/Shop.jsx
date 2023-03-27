import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products,setProducts] = useState([]);
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
            <div className="cart-container">
                <h2>This is cart container </h2>
            </div>
        </div>
    );
};

export default Shop;