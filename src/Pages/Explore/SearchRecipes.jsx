import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Nav from '../../Components/Nav/Nav'
import '../Home/home.css'
 
 export default function SearchRecipes(){
    return(
        <div className="search-recipes-container">
            <SearchBar/>
            <Nav/>
        </div>
    )
}

