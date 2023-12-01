import React from 'react';
import './feature.css';
import { RecommendedTitle } from "../../Props";

const Recommended = () => {
  return (
    <div className="recommended">
      <RecommendedTitle/>
      <div className="recommended-images">
        <img src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=300" alt="recom1"/>
        <img src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=300" alt="recom2"/>
      </div>
    </div>
  )
}

export default Recommended
