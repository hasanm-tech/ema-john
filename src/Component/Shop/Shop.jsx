import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {


    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    const handle_add_to_cart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product => <Product key={product.id} product={product} handle_add_to_cart = {handle_add_to_cart}></Product>)}
            </div>
            <div className="cart-container">
                <div className='cart-content'>
                <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;