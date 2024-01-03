// ParentComponent.js
import React, { useState } from 'react';
//import ChildComponentA from '../Category/Categories';
//import ChildComponentB from '../Search/Seach';
import Category from '../Category/Category';
import Searched from '../../Pages/Searched/Searched';

function ParentComponent({ componentToShow }) {
  const [sharedState, setSharedState] = useState('chicken');

  return (
    <div>
      {componentToShow === 'Category' ? (
        <div>
          <Category sharedState={sharedState} setSharedState={setSharedState} />
        </div>
      ) : (
        <div>
        <Searched sharedState={sharedState} />
        </div>
      )}
    </div>
  );
}

export default ParentComponent;