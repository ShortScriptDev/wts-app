import React, {useState} from 'react';
import './categories.css';
import Category from '../../Components/Category/Category';
import { CategoryMenu } from '../../Props';

export const Context = React.createContext();

export default function Categories({className}) {
  const [hidden, setHidden] = useState(false);
  //const catContClass = 'categories-container';
  return (
    <div className={`${className} ${hidden ? "hide" : "categories-container"}`}>
      <CategoryMenu hidden={hidden} setHidden={setHidden}/>
      <Category hidden={hidden} setHidden={setHidden}/>
    </div>
  )
}

