import logo from './logo.svg';
import './App.css';
import menu from './Func.js';

function App() {
  return (
    <div className="App">
   {/* <div className="menu-expand">
    <p>"WoW" Something Smells Great!</p>
    <p>Dinner Ideas</p>
    <p>10 Most Popular Foods</p>
    <p>Breakfast Receipes</p>
    <p>Lunch Receipes</p>
    <p>Vegan Receipes</p>
    <p>Family Receipes</p>
    <p>Easy To Cook Receipes</p>
    <p>Less Than 10 Ingredients</p>
    <div>
     <img/>
     <h2>Next Dinner Idea</h2>
     <p></p>
    </div>
     <div>
     <img/>
     <h2>Kids Lunch Ideas</h2>
     <p></p>
    </div>
    <i></i>
   </div> */}
      <div className="header">
        <img className="logo" src="wtslogo.png"/>
        <nav className="menu">
          <i className="bi-list" onClick={menu
          }></i>
        </nav>
      </div>
      <div className="section-1">
        <div className="search-bar">
          <input placeholder='Chicken... Dinner... Vegan...'></input>
        </div>
        <div className="carousel-container">
          <div className="carousel">
            <p className="carousel-left"></p>
            <p className="carousel-middle"></p>
            <p className="carousel-right"></p>
          </div>
        </div>
      </div>
      <div className="section-2">
        <h2></h2>
        <div>
        <div></div>
        <div></div>
        </div>
      </div>
      <div className="section-3">
        <div>
        <img/>
        <img/>
        </div>
      </div>
    </div>
  );
}

export default App;
