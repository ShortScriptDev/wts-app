import React from 'react';
import './features.css';
import { PopularRecipes } from '../../Props';
import { Feature } from '../../Components';

const Features = () => {
  return (
    <div className="features-container">
      <PopularRecipes/>
      <Feature/>
    </div>
  )
}

export default Features
