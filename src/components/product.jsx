import React from 'react';
import { useContext } from 'react';
import { ShopContext } from './shop-context';
function Product(props) {
    const{id,productName,price,productImage}=props.data
    const{addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount=cartItems[id];
    return ( <div>
        <div className="product">
            <img src={productImage} alt=""/>
            <div className="desc">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add to Cart{cartItemAmount>0 &&<>({cartItemAmount})</>}
            </button>
        </div>
    </div> );
}

export default Product;