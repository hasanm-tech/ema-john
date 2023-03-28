import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {  //option 3 
    
    // const cart = props.cart; option 1
    // const {cart}=props;  option 2 
    console.log(cart)
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        const price = product.price;
        total = total + price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total * 7 / 100;
    const grandTotal= total + totalShipping + tax;

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Item {cart.length} </p>
            <p>total price : ${total} </p>
            <p>Shipping :${totalShipping} </p>
            <p> Tax :${tax}</p>
            <h4>Grand total : ${grandTotal}</h4>
        </div>
    );
};

export default Cart;