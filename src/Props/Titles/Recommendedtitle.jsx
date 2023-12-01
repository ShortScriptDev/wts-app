import React from 'react';
import '../NavBar/navbar.css';

function RecommendedTitle(props){
  return (
    <div className="recommend-nav">
      <p className="feature-name">Recommended</p>
    </div>
  )
}
export default RecommendedTitle
//<p className="feature-name">Recommended</p>
//<p className={ `${color ? "feature-name" : "feature-recommend-name"}`}>Recommended</p>