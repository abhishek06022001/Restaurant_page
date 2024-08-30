import React, { useContext } from 'react'
import Model from './ui/Model'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../utils/Formatting';
import Button from './ui/Button';
import CartItem from './CartItem';
function Cart() {
    // jab vo button pressed hai tab cart khul raha hai 
    const cartCtx = useContext(CartContext);
    const userProgressCts = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price
    }, 0);
    // These are changing states of context and hence they are refreshing and passing refreshed data in here ;0 
    const handleCloseCart = () => {
        userProgressCts.hideCart();
    };
    function handleGoToCheckOut() {
        userProgressCts.showCheckOut();
    };
    return (
        <Model className='cart' open={userProgressCts.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem key={item.id} name={item.name}
                        quantity={item.quantity} price={item.price} onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)} />
                ))}
            </ul>
            <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleCloseCart}>
                    close
                </Button>
                {cartCtx.items.length > 0 && (
                    <Button onClick={handleGoToCheckOut}>Go to CheckOut</Button>
                )}
            </p>
        </Model>
    )
}
export default Cart