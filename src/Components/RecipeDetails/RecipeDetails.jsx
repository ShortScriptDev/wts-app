import React from 'react';
import { useLocation } from 'react-router-dom';


const RecipeDetails = () => {
  const { state } = useLocation();

  if (!state) {
    // Handle a case where state is not available
    return <div>No recipe details available</div>;
  }

  const { title, image, calories, ingredients } = state;

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>Calories: {calories.toFixed()}</p>
      <div className="ingredients-list">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
