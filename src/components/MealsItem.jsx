import React, { useContext } from 'react'
import Button from './ui/Button'
import { currencyFormatter } from '../utils/Formatting'
import CartContext from '../store/CartContext'
function MealsItem({ meal }) {
    const cartCtx = useContext(CartContext);
    function handleAddMenuToCart() {
        cartCtx.addItem(meal);
    }
    return (
        <li className='meal-item'>
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
                    <p className='meal-item-description'>{meal.description}</p>
                </div>
                <p className='meal-item-actions'>
                    <Button onClick={handleAddMenuToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}
export default MealsItem