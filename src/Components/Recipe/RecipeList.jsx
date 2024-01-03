import React from 'react';
import './recipe.css';
import Nav from '../Nav/Nav';
import {useNavigate } from 'react-router-dom';

const RecipeList = ({ title, image, calories, ingredients }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      // Navigate to a new page with recipe details
      navigate(`/recipes/${title}`, { state: { title, image, calories, ingredients } });
    };

 return (
    <div className="searched-recipe-container">
      <div className="recipe-style" onClick={handleClick}>
        <img className="recipe-image" src={image} alt="" />
        <div className="title-info">
          <h1>{title}</h1>
          <p>Calories: {calories.toFixed()}</p>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default RecipeList;

/*          <ol>
                {ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>

            //ClickedRecipe(title);
*/








/* import React from 'react';
import './recipe.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import ClickedRecipe from './Recipe';

const RecipeList = ({title, image, calories, ingredients}) => {
    return(
        <div className="searched-recipe-container">
            <Link className="link Recipe-info" onClick={()=>ClickedRecipe(title)}>
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

            //ClickedRecipe(title);
*/