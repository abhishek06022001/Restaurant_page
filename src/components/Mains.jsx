import React, { useEffect, useState } from 'react'
import MealsItem from './MealsItem';
function Mains() {
    const [loadedMeals, setLoadedMeals] = useState([]);
    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals');
            if (!response.ok) {
            }
            const meals = await response.json();
            setLoadedMeals(meals);
        }
        fetchMeals();
    }, []);
    console.log(loadedMeals);
    return (
        <ul id='meals'>
            {loadedMeals.map(meal => {
                return <MealsItem key={meal.id} meal={meal} />
            })}
        </ul>
    )
}

export default Mains