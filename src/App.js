import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Calc from "./Pages/Calc";
import Faq from "./Pages/Faq";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";

import { NavBar } from "./Components/Nav/Nav-bar";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/kalkulator" element={<Calc />} />
        <Route path="/uslugi" element={<Service />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
