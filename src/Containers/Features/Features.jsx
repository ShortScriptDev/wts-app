import React, {useState, createContext} from 'react';
import './features.css';
import { PopularRecipes } from '../../Props';
import { Feature } from '../../Components';

export const AppContext = createContext();
const Features = () => {
  const [hidden, setHidden] = useState(false);
  const popContClass = "features-container";
  return (
    <AppContext.Provider value={{hidden, setHidden}}>
    <div className={`${popContClass}`}>
      <PopularRecipes/>
      <Feature/>
    </div>
    </AppContext.Provider>
  )
}

export default Features
