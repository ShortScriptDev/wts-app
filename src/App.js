//import { HashRouter as Router} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile'
import FavoriteRecipes from './Pages/LikedRecipes/FavoriteRecipes';
import SearchRecipes from './Pages/Explore/SearchRecipes';
import Searched from './Pages/Searched/Searched';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/wts-app">
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/myfavoriterecipes" element={<FavoriteRecipes/>}/>
          <Route path="/recipes" element={<SearchRecipes/>}/>
          <Route path="/recipesearch" element={<Searched/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Route path="*" element={<NoPage/>}/> // for 404 pages 
