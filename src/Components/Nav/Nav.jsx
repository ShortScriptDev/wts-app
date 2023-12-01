import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = (props) => {
 return (
    <div>
      <div className="main-nav">
      <Link className="link" to="/home"><i className="bi bi-house-door-fill"></i></Link>
      <Link className="link" to="/myfavoriterecipes"><i className="bi bi-suit-heart-fill"></i></Link>  
      <Link className="link" to="/recipes"><i className="bi bi-search-heart-fill"></i></Link>  
       <Link className="link" to="/profile"><i className="bi bi-person-lines-fill"></i></Link> 
      </div>
    </div>
  )
}

export default Nav
