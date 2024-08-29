import React, { useCallback, useContext } from 'react'
import logoimg from '../assets/logo.jpg'
import Button from './ui/Button'
import Mains from './Mains'
import UserProgressContext from '../store/UserProgressContext'
import CartContext, { CartContextProvider } from '../store/CartContext'
function Header() {
    const userProgressCts = useContext(UserProgressContext);
    const cartCts = useContext(CartContext);
    const handleShowCart = () => {
        userProgressCts.showCart();
    }
    const cartTotal = cartCts.items.reduce((totalNumOfItems, item) => {
        return totalNumOfItems + item.quantity;
    }, 0)
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoimg} alt="Food App" />
                <h1>React Food App</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({cartTotal})</Button>
            </nav>
        </header>
    )
}

export default Header