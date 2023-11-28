import {Feature} from './Components';
import {Features, Header, Categories} from './Containers';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <div className="Gradient_bg">
        <Feature/>
      </div>
      <Features />
    </div>
  );
}

export default App;
