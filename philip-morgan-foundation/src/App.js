import './main.scss'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Donate from "./components/Donate/Donate";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
