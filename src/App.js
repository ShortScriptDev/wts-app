import {Feature, Navbar} from './Components';
import {Features, Header} from './Containers';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="Gradient_bg">
        <Feature/>
      </div>
      <Features />
    </div>
  );
}

export default App;
