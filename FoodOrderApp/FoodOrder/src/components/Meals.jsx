import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";
export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
        const response = await fetch("http://localhost:3000/meals");
        console.log(response); //get the response
    
        if (!response.ok) {
          //handle
        }
    
        const meals = await response.json();
        console.log(meals); //get the data
    
        setLoadedMeals(meals);
      }
    
      fetchMeals();
  },[]);

  




  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key = {meal.id} meal = {meal}/>
        
      ))}
    </ul>
  );
}
