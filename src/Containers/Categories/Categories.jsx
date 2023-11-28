import React from 'react';
import './categories.css';
import Navbar from '../../Components/NavBar/Navbar';
import Category from '../../Components/Category/Category';

const Categories = () => {
  return (
    <div className="categories-container">
      <Navbar/>
      <Category/>
    </div>
  )
}

export default Categories
