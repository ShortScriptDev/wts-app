import React from "react";
import Nav from '../../Components/Nav/Nav'
import '../Home/home.css'
import './favoriterecipes.css'
 export default function FavoriteRecipes(){
    return(
        <div className="favorites-container">
            <div className="favorites-header-container">
                <h3 className="logoname">What's That Smell</h3>
                <img className="favorites-profile-image" alt="profileimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
            </div>
            <div className="favorites-title-container">
                <h2 className="favorites-title">Your Favorite Recipes</h2>
            </div>
            <div className="favorites-list-container">
                <ol className="favorites-recipe-lists">
                    <li className="nofavorites">
                        <p >You haven't favorited any recipes yet.</p>
                    </li>
                    <li className="recipe-list">
                        <img className="favorites-recipe-image" alt="recipeimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
                        <div className="recipe-list-description">
                            <h3>Recipe Title</h3>
                            <p>Recipe Description</p>
                        </div>
                        <i className="bi bi-suit-heart-fill"></i>
                    </li>
                    <li className="recipe-list">
                        <img className="favorites-recipe-image" alt="recipeimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
                        <div className="recipe-list-description">
                            <h3>Recipe Title</h3>
                            <p>Recipe Description</p>
                        </div>
                        <i className="bi bi-suit-heart-fill"></i>
                    </li>
                    <li className="recipe-list">
                        <img className="favorites-recipe-image" alt="recipeimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
                        <div className="recipe-list-description">
                            <h3>Recipe Title</h3>
                            <p>Recipe Description</p>
                        </div>
                        <i className="bi bi-suit-heart-fill"></i>
                    </li>
                    <li className="recipe-list">
                        <img className="favorites-recipe-image" alt="recipeimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
                        <div className="recipe-list-description">
                            <h3>Recipe Title</h3>
                            <p>Recipe Description</p>
                        </div>
                        <i className="bi bi-suit-heart-fill"></i>
                    </li>
                    <li className="recipe-list">
                        <img className="favorites-recipe-image" alt="recipeimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
                        <div className="recipe-list-description">
                            <h3>Recipe Title</h3>
                            <p>Recipe Description</p>
                        </div>
                        <i className="bi bi-suit-heart-fill"></i>
                    </li>
                    <li className="recipe-list">
                        <img className="favorites-recipe-image" alt="recipeimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
                        <div className="recipe-list-description">
                            <h3>Recipe Title</h3>
                            <p>Recipe Description</p>
                        </div>
                        <i className="bi bi-suit-heart-fill"></i>
                    </li>
                </ol>
            </div>
        <Nav/>
        </div>
    )
}

