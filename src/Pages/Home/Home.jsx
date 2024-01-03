import React from 'react';
import Header from '../../Containers/Header/Header';
import Features from "../../Containers/Features/Features";
import Recommended from '../../Components/Feature/Recommended';
import Nav from '../../Components/Nav/Nav';
import './home.css';
import Categories from '../../Containers/Categories/Categories';
const Home = () => {
  return (
          <div className="home">
            <Header/>
            <Categories componentToShow="Category"/>
            <Features/>
            <Recommended/>
            <Nav/>
        </div>
  )
}
export default Home
