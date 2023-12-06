import RecipeList from '../../Components/Recipe/RecipeList';
import './searched.css';
import {useState, useEffect} from "react";
import logo from '../../Containers/Header/logo.png';


function Searched() {
  const APP_ID = '5c8af1c8';
  const APP_KEY = 'a59776d69fa4186570bedb797f022a0b';
  const [allRecipes, setAllRecipes] = useState([]);
  const recipes = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  console.log(data)
  setAllRecipes(data.hits)
}
useEffect(()=>{
   recipes()
}, []);
return(
    <div className='search-recipes-container'>
      <div className='search-recipes-header searched-recipes-header'>
                <div className='logo-container'>
                    <img src={logo} alt="logo"/>
                </div>
                <form className='searchform'>
                    <input type="search" id="add" className='search-page-search-bar' placeholder="$searchedfor"/>
                </form>
            </div>
      <div>
        {allRecipes.map(recipe =>(
            <RecipeList 
          key = {recipe.recipe.label}
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
)}
export default Searched