import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <div className="sec1">
        <div className="search-bar">
          <input placeholder='Chicken..Dinner..Vegan'></input>
        </div>
        <div className="carousel-container">
          <div className="carousel">
            <div><img/></div>
          </div>
        </div>
      </div>
      <div className="sec2">
        <h2></h2>
        <div>
        <div></div>
        <div></div>
        </div>
      </div>
      <div className="sec3">
        <div>
        <img/>
        <img/>
        </div>
      </div>
    </div>
  );
}

export default App;
