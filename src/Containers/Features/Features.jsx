import React from 'react';
import './features.css';
import { PopularRecipes } from '../../Props';
import { Feature } from '../../Components';
import RecommendedTitle from '../../Props/Titles/Recommendedtitle';

const Features = () => {
  return (
    <div className="features-container">
      <PopularRecipes/>
      <Feature/>
      <RecommendedTitle/>
    </div>
  )
}

export default Features
