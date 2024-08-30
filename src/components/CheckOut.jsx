import React, { useContext } from 'react'
import Model from './ui/Model'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'
import { currencyFormatter } from '../utils/Formatting';
import Input from './ui/Input';
import Button from './ui/Button';
function CheckOut() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price
    }, 0);
    function handleClose() {
        userProgressCtx.hideCheckOut();
    }
    return (
        <Model open={userProgressCtx.progress === 'checkout'}>
            <form>
                <h2>CheckOut</h2>
                <p>Total Amount :{currencyFormatter.format(cartTotal)}</p>
                <Input label="Full Name" id="full-name" type="text" />
                <Input label="E-Mail Address" id="email" type="email" />
                <Input label="Street" id="street" type="text" />
                <div className="control-row">
                    <Input label="Postal code " id="postal-code" type="text" />
                    <Input label="City" id="city" type="text" />
                </div>
                <p className='modal-actions'>
                    <Button type="button" textOnly onClick={handleClose}>Close </Button>
                    <Button textOnly>Submit Order</Button>
                </p>

            </form>
        </Model>
    )
}

export default CheckOut