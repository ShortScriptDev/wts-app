import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Nav from '../../Components/Nav/Nav'
import '../Home/home.css'
 
 export default function SearchRecipes(){
    return(
        <>
        <SearchBar/>
        <h2> Search Recipes </h2>
        <Nav/>
        </>
    )
}

