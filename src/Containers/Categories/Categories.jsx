import React, {useState} from 'react';
import './categories.css';
import Category from '../../Components/Category/Category';
import { CategoryMenu } from '../../Props';

export const Context = React.createContext();

const Categories = () => {
  const [hidden, setHidden] = useState(true);
  const catContClass = 'categories-container';
  return (
    <div className={`${catContClass} ${hidden ? "hide" : "categories-container"}`}>
      <CategoryMenu hidden={hidden} setHidden={setHidden}/>
      <Category hidden={hidden} setHidden={setHidden}/>
    </div>
  )
}

export default Categories
