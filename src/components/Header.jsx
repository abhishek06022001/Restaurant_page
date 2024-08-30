import React, { useCallback, useContext } from 'react'
import logoimg from '../assets/logo.jpg'
import Button from './ui/Button'
import Mains from './Mains'
import UserProgressContext from '../store/UserProgressContext'
import CartContext, { CartContextProvider } from '../store/CartContext'
// Header samaj La 
// Isme do hote hain userContext and CartContext to checkif open and to show the count inside the cart on the frontpage :)
function Header() {
    //User ka context provide kiya gaya hai,like user ne cart khola ya nahi khola etc :)
    const userProgressCts = useContext(UserProgressContext);
    //Some context object of a Cart.
    const cartCts = useContext(CartContext);
    // Click karne p it will show the cart which is from the user context :)
    const handleShowCart = () => {
        userProgressCts.showCart();
    }
    // Shows the cartTotal here :)
    const cartTotal = cartCts.items.reduce((totalNumOfItems, item) => {
        return totalNumOfItems + item.quantity;
    }, 0);
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