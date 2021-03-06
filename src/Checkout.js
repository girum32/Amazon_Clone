import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg"  alt=""/>

                    {basket?.length === 0 ? (
                        <div>
                            <h2>Your Amazon Cart is empty</h2>
                            <p>You have no item in your basket. To put one or more items, click "Add to Cart" next to the item.</p>
                        </div>
                    ) : (
                            <div>
                                <h2 className="checkout__title">Your Shopping Cart</h2>
                                {basket.map(item => (
                                    <CheckoutProduct 
                                        id={item.id}
                                        title={item.title} 
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}  
                                    />
                                    
                                ))}
                            </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
