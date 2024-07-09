import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import Order from './order';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item = {el} />
        ))}
        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} $</p>
        </div> 
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Ваша корзина пустая.</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCarOtpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>Games staff</span>
                <ul className='nav'>
                    <li>About Us</li>
                    <li>Contacts</li>
                    <li>Reviews</li>
                </ul>
                <FaCartShopping onClick={() => setCarOtpen(cartOpen = !cartOpen)} className={`shop-cart-btn ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}
