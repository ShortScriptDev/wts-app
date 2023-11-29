import { Nav } from './Components';
import Recommended from './Components/Feature/Recommended';
import {Features, Header, Categories} from './Containers';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Features />
      <Recommended/>
      <Nav/>
      <div className="Gradient_bg">
      </div>
    </div>
  );
}

export default App;
