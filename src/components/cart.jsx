import React from 'react';
import { PRODUCTS } from '../products';
import { ShopContext } from './shop-context';
import { useContext } from 'react';
import CartItem from './cart-item';
import "./cart.css";
import { useNavigate } from 'react-router-dom';
function Cart() {
    const{cartItems,getTotalCartAmount}=useContext(ShopContext);
    const totalAmount=getTotalCartAmount()

    const navigate =useNavigate()
    return ( <div className="cart">
        <div>
            <h1>Your cart</h1>
        </div>
        <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
        {totalAmount>0?(
        <div className="checkout">
            <p>Subtotal:${totalAmount}</p>
            <button onClick={()=>navigate("/home")}>Continue Shopping</button>
            <button onClick={()=>alert("Thankyou for shopping")}>Checkout</button>
        </div>
    ):(<h1>Oops! Empty Cart</h1>)}
    </div> );
};

export default Cart ;