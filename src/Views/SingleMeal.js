import React, { useState, useEffect } from 'react'
import Mealitem from '../Components/MealItem';
import { useParams } from 'react-router-dom';


export default function SingleMeal({ user }) {
    const { idMeal } = useParams()
    const [ meal, setMeal ] = useState({})

    const getSingleMeal = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await res.json();
        if (data.status === 'ok'){
            setMeal(data.meals)
        }
    };

    useEffect(() => {
        getSingleMeal()
    }, [])

  return (
    <div>
        <Mealitem meal={meal}  />
    </div>
  )
}