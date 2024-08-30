import React from 'react'
import { currencyFormatter } from '../utils/Formatting'
function CartItem({ children, quantity, name, price, onIncrease, onDecrease }) {
    return (
        <li className=' cart-item' >
            <p>
                {name} : {quantity} X {currencyFormatter.format(price)}
            </p>
            <p className='cart-item-actions'>
                <button onClick={onIncrease}>+</button>
                <span>{quantity}</span>
                <button onClick={onDecrease}>-</button>
            </p>
        </li>
    )
}
export default CartItem