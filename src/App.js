import './App.css';
import Footer from './Footer';
import NavBar from './Nav-bar';
import Mid from './Mid';
import Offers from './Offers';
import Info from './Info';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Mid/>
      <Offers/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
