import React from 'react';
import './recipe.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const RecipeList = ({title, image, calories, ingredients}) => {
    return(
        <div className="searched-recipe-container">
            <Link>
            <div className="recipe-style">
                <img className="recipe-image" src={image} alt=""/>
                <div className="title-info">
                    <h1>{title}</h1>
                    <p>Calories:{calories.toFixed()}</p>
                </div>
            </div>
            </Link>
            <Nav/>
        </div>
    )
}
export default RecipeList
/*          <ol>
                {ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
*/