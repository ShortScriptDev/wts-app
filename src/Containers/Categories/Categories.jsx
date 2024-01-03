// Categories.jsx
/*
import React, { useState } from 'react';
import './categories.css';
import Category from '../../Components/Category/Category';
import Searched from '../../Pages/Searched/Searched';
import { CategoryMenu } from '../../Props';

function Categories({ componentToShow, className }) {
  const [sharedState, setSharedState] = useState('chicken');
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {componentToShow === 'Category' ? (
      <div className={`${className} ${hidden ? "hide" : "categories-container"}`}>
        <CategoryMenu hidden={hidden} setHidden={setHidden} />
        <Category hidden={hidden} sharedState={sharedState} setSharedState={setSharedState} />
      </div>
      ) : (
        <div>
        <Searched sharedState={sharedState} />
        </div>
      )}
    </div>
  );
}

export default Categories;*/
/*
export function Categories({ className }) {
  const [hidden, setHidden] = useState(false);

  return (
      <div className={`${className} ${hidden ? "hide" : "categories-container"}`}>
        <CategoryMenu hidden={hidden} setHidden={setHidden} />
        <Category hidden={hidden} />
      </div>
  );
}
*/