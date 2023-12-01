import React from "react";
import Nav from '../../Components/Nav/Nav'
import Recommended from '../../Components/Feature/Recommended'
import '../Home/home.css'
import './profile.css'

 export default function Profile(){
    return(
        <div className="profile-container">
            <div className="profile">
                <h2> Profile </h2>
                <div className="profile-header-container">
                    <div className="profile-header">
                        <img className="profile-image" alt="profileimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
                        <div className="profile-header-info">
                            <h3>Profile Name +</h3>
                            <p className="profile-bio">Bio Info</p>
                            <div className="profile-about">
                                <p className="profile-about-recipes">23 Recipes</p>
                                <p className="profile-about-liked">80 Favs</p>
                                <p className="profile-about-add"> + </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="profile-headers">
                        <h3>Favorite Recipes</h3>
                        <p>More</p>
                    </div>
                    <p className="nofavorites">You haven't favorited any recipes yet.</p>
                    <div className="profile-favorites">
                        <img className="favorites-images" alt="favoriteimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
                    </div>
                    <div className="profile-headers">
                        <h3>My Recpeies</h3>
                    </div>
                    <p className="nofavorites">You do not have any recipes yet.</p>
                    <div className="profile-member-recipes">
                        <div className="recipe-info">
                            <img className="recipe-image" alt="recipeimage" src="https://placehold.co/400x400/000000/FFFFFF/png"/>
                            <p className="profile-recipe-description">Some recipe description about the members recipe. Can include many details...</p>
                        </div>
                    </div>
                    <div className="more-link">
                        <p>More</p>
                    </div>
                </div>
            </div>
            <Recommended/>
            <Nav/>
        </div>
    )
}

