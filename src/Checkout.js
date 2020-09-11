import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return(
        <div className='checkout'>
            <div className='checkout__left'>
                <img 
                className='checkout__ad'
                src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/AlexaSmartHome/Smart-lighting-stripe_PC._CB423530604_.jpg'
                alt=""
                />
            <div>
                <h2 className='checkout__title'>
                Your Shopping Basket
                </h2>
                {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
            </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>


    );
}
export default Checkout;