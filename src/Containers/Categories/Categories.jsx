import React from 'react';
import './categories.css';
import Category from '../../Components/Category/Category';
import { CategoryMenu } from '../../Props';

const Categories = () => {
  return (
    <div className="categories-container">
      <CategoryMenu/>
      <Category/>
    </div>
  )
}

export default Categories
