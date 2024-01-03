import React, { useState, useEffect } from 'react';
import RecipeList from '../../Components/Recipe/RecipeList';
import './searched.css';
import logo from '../../Containers/Header/logo.png';

function Searched({ sharedState, setSharedState }) {
  const APP_ID = '5c8af1c8';
  const APP_KEY = 'a59776d69fa4186570bedb797f022a0b';
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.edamam.com/search?q=${sharedState}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
  
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Fetch data when sharedState changes
      if (sharedState) {
        fetchData();
      }
      if (searchValue) {
        fetchData();
      }
    }, [sharedState, searchValue]);

    const handleInputChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Update sharedState with the search input value
      setSharedState(searchValue);
    };
  
    
    return(
      <div className='search-recipes-container'>
        <div className='search-recipes-header searched-recipes-header'>
                  <div className='logo-container'>
                      <img src={logo} alt="logo"/>
                  </div>
                  <form className='searchform'  onSubmit={handleSubmit}>
                      <input type="search" id="add" className='search-page-search-bar' placeholder="Search" value={searchValue}
            onChange={handleInputChange}/>
                      <button className="searchbtn">search</button>
                  </form>
              </div>
      {data && (
      <div>
        {data.hits.map((recipe, index) =>(
            <RecipeList 
          key={`${recipe.recipe.label}-${index}`}
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    )}
      </div>
  );}
  export default Searched;  

 /* 
return (
  <div>
    <p>ChildComponentB: {sharedState}</p>

    {data && (
      <div>
        <p>Data fetched:</p>
        <ul>
          {data.hits.map((item) => (
            <li key={item.recipe.label}>{item.recipe.label}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
}
*/
/*

function Searched(props) {
  const APP_ID = '5c8af1c8';
  const APP_KEY = 'a59776d69fa4186570bedb797f022a0b';
  const [allRecipes, setAllRecipes] = useState([]);
  useEffect(() => {

   const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data from API:', data);

      setAllRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching and updating recipes:', error);
    }
  };

    fetchRecipes();
  }, [search]);

  return(
    <div className='search-recipes-container'>
      <div className='search-recipes-header searched-recipes-header'>
                <div className='logo-container'>
                    <img src={logo} alt="logo"/>
                </div>
                <form className='searchform'>
                    <input type="search" id="add" className='search-page-search-bar' placeholder="$searchedfor"/>
                    <button>search</button>
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
*/