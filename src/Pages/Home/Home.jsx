import React from 'react';
import Header from '../../Containers/Header/Header';
import Categories from '../../Containers/Categories/Categories';
import Features from "../../Containers/Features/Features";
import Recommended from '../../Components/Feature/Recommended';
import Nav from '../../Components/Nav/Nav';
import './home.css';

const Home = () => {
  return (
          <div className="home">
            <Header/>
            <Categories/>
            <Features/>
            <Recommended/>
            <Nav/>
        </div>
  )
}
export default Home
