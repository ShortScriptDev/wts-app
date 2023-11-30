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
                        <img className="profile-image" alt="profileimage"/>
                        <div className="profile-header-info">
                            <h3>Profile Name +</h3>
                            <p>Bio Info</p>
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
                    <div className="profile-favorites">
                        <img className="favorites-images" alt="favoriteimage"/>
                    </div>
                    <div className="profile-headers">
                        <h3>My Recpeies</h3>
                    </div>
                    <div className="profile-member-recipes">
                        <div className="recipe-info">
                            <img className="recipe-image" alt="recipeimage"/>
                            <p className="recipe-description">Some recipe description about the members recipe. Can include many details...</p>
                        </div>
                    </div>
                    <div className="more-link">
                        <p>More</p>
                    </div>
                </div>
            </div>
            <p className="recommended-feature">Recommended</p>
            <Recommended/>
            <Nav/>
        </div>
    )
}

