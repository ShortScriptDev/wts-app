import React, { useState } from 'react';
import '../../Pages/Home/home.css';
import './searchrecipes.css';
import Category from '../../Components/Category/Category';
import Searched from '../../Pages/Searched/Searched';
import { CategoryMenu } from '../../Props';
import logo from '../../Containers/Header/logo.png';
import Features from '../../Containers/Features/Features';
import Recommended from '../../Components/Feature/Recommended';
import Nav from '../../Components/Nav/Nav';
import chickenimg from '../Explore/chickenV.jpg';
import steakimg from '../Explore/SaltnPepSteak.jpg';
import shrimpimg from '../Explore/SweetSourShrimp.jpg'


function SearchRecipes({ componentToShow, className }) {
  const [sharedState, setSharedState] = useState('chicken');
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {componentToShow === 'Category' ? (
        <div className="search-recipes-container">
        <div className="search-recipes-header">
            <div className="logo-container"><img src={logo} alt="logo"/></div>
            <input type="search" id="add" className="search-page-search-bar" placeholder="Search Recipes.."/>
            <div className="slider">
                <div className="slider-img1">
                    <h2 className="slide-title"> ENJOY THE BEST RECIPES FOR YOUR NEXT MEAL</h2>
                </div>
                <div className="slide-dots">
                    <p className="slide-dot currentslide"></p>
                    <p className="slide-dot"></p>
                    <p className="slide-dot"></p>
                </div>
            </div>
            <div className={`${className} ${hidden ? "hide" : "categories-container"}`}>
                <CategoryMenu hidden={hidden} setHidden={setHidden} />
                <Category hidden={hidden} sharedState={sharedState} setSharedState={setSharedState} />
            </div>
            
            <div className="featured-recipe">
                    <div className="recipe-info">
                    <img  className="recipe-image" src={chickenimg} alt=""/>
                        <p className="recipe-description">Savory Chicken Vesuvio: Golden-brown chicken, crispy potatoes, and aromatic herbs unite.</p>
                    </div>
                    <div className="recipe-info">
                    <img className="recipe-image" src={steakimg} alt=""/>
                     <p className="recipe-description">Zesty Salt & Pepper Steak: Succulent beef seasoned, seared to perfection.</p>
                    </div>
                    <div className="recipe-info">
                    <img className="recipe-image" src={shrimpimg} alt=""/>
                    <p className="recipe-description">Sweet & Sour Shrimp: Succulent shrimp in tangy, flavorful harmony.</p>
                    </div>
                </div>
                <Features/>
                    <div className="desserts-feature">
                        <div className="desserts-feature-section">
                            <h2 className="desserts-feature-title">Delicious Desserts!</h2>
                            <p className="desserts-feature-description">A delicious way to finish a meal</p>
                        </div>
                        <div className="desserts-feature-image-section">
                            <img className="desserts-feature-image" src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=300"alt="icon-img"/>
                        </div>
                    </div>
                <Recommended/>
            </div>
            <Nav/>
        </div>
        ) : (
        <div>
        <Searched sharedState={sharedState} setSharedState={setSharedState}/>
        </div>
      )}

    </div>
  );
}

export default SearchRecipes;
//<img className="recipe-image" alt="recipeimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>