import './styles/main.scss'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Contact from "./pages/Contact/Contact";
import Donate from "./pages/Donate/Donate";
import Navbar from './pages/NavBar';


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
