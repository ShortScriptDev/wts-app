import React from 'react'
import './navbar.css'

function CategoryMenu(props){
  return (
    <div className="nav">
      <p className="feature-name">Categories</p>
      <i className="bi bi-list" onClick={()=> {props.setHidden(!props.hidden)}}></i> 
    </div>
  )
}

export default CategoryMenu
