import React from "react";
import Header from '../../Containers/Header/Header'
import Categories from '../../Containers/Categories/Categories'
import Features from "../../Containers/Features/Features";
import Recommended from '../../Components/Feature/Recommended'
import Nav from '../../Components/Nav/Nav'
import './home.css'
 
function Home(){
    return(
        <div className="home">
            <Header/>
            <Categories/>
            <Features />
            <Recommended/>
            <Nav/>
        </div>
    )
}
export default Home
/* <Header/>
        <Categories/>
        <Features />
        <Recommended/>
        <Nav/>

    //
    import {FavoriteRecipes} from './Pages/LikedRecipes/FavoriteRecipes';
import {SearchRecipes} from './Pages/Explore/SearchRecipes';
import {Profile} from './Pages/Profile/Profile';
import {Home} from './Pages/Home/Home'
    //
    <BrowserRouter>
        <Routes>
          <Route element={<Home/>}/>
          <FavoriteRecipes/>
          <SearchRecipes/>
          <Profile/>
        </Routes>
      </BrowserRouter>

         */