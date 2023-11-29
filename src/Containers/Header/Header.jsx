import React from 'react';
import './header.css';
import SearchBar from '../../Components/SearchBar/SearchBar';
import logo from './logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-section1">
      <div className="logo"><img src={logo} alt="logo"/></div>
      <SearchBar/>
      </div>
      <div className='welcome'><p>Welcome! Find your next recipe today.</p></div>
    </div>
  )
}

export default Header
