import React from 'react';
import './searchbar.css'

function SearchBar(props){
  return (
    <div className="searchbar-container">
    <input type="search" id="add" className="searchbar" placeholder="Search Recipes.."/>
    </div>
  )
}

export default SearchBar
