import React, {useContext} from 'react'
import { AppContext } from '../../Containers/Features/Features';
import './navbar.css'

function PopularRecipes(props){
  const {hidden, setHidden} = useContext(AppContext);
  return (
    <div className="nav">
      <p className="feature-name">Popular Recipes</p>
      <i className="bi bi-list" onClick={()=> {setHidden(!hidden)}}></i>
    </div>
  )
}

export default PopularRecipes
