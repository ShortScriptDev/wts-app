import React from 'react';
import { useLocation } from 'react-router-dom';
import './recipedetails.css'
import Nav from '../Nav/Nav';
const RecipeDetails = () => {
  const { state } = useLocation();

  if (!state) {
    // Handle a case where state is not available
    return <div>No recipe details available</div>;
  }

  const { title, image, calories, ingredients } = state;

  return (
    <div className="recipe-container">
        <div className='title-container'>
            <h1>{title}</h1>
        </div>
        <div className='image-container'><img src={image} alt=""/></div>
      <div className='details-container'>
        <p className="calories" >Calories: {calories.toFixed()}</p>
        <div className="ingredients-list">
            <h3>Ingredients:</h3>
            <ul>
            {ingredients.map((ingredient, index) => (
                <li className='ingredient' key={index}>{ingredient.text}</li>
            ))}
            </ul>
        </div>
      </div>
      <Nav/>
    </div>
  );
};

export default RecipeDetails;
