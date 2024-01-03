//import { HashRouter as Router} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Pages/Profile/Profile'
import FavoriteRecipes from './Pages/LikedRecipes/FavoriteRecipes';
import SearchRecipes from './Containers/Explore/SearchRecipes';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/wts-app">
        <Routes>
          <Route index element={<SearchRecipes componentToShow="Category" />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/myfavoriterecipes" element={<FavoriteRecipes/>}/>
          <Route path="/recipes" element={<SearchRecipes componentToShow="Category" />}/>
          <Route path="/recipesearch" element={<SearchRecipes componentToShow="Searched" />}/>
          <Route path="/recipes/:recipeTitle" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Route path="*" element={<NoPage/>}/> // for 404 pages 
// <Route path="/page1" element={<Categories componentToShow="Category" />} />
// <Route path="/page2" element={<Categories componentToShow="Searched" />} />
// <Route path="/home" element={<Home/>}/>
