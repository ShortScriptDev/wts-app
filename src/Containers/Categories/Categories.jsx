import React, {useState} from 'react';
import './categories.css';
import Category from '../../Components/Category/Category';
import { CategoryMenu } from '../../Props';

export const Context = React.createContext();

const Categories = () => {
  const [username, setUsername] = useState("hide");
  const [hidden, setHidden] = useState(true);
  const [isShow, setShow] = useState("hidden");
  const catContClass = 'categories-container';
  return (
    <div className={`${catContClass} ${hidden ? username : "categories-container"}`}>
      <CategoryMenu username={username} setUsername={setUsername} 
      isShow={isShow} setShow={setShow} hidden={hidden} setHidden={setHidden}/>
      <Category username={username} isShow={isShow}/>
    </div>
  )
}

export default Categories
