import './styles/main.scss'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./PageComponents/Home/Home";
import NotFound from "./PageComponents/NotFound";
import About from "./PageComponents/About/About";
import Events from "./PageComponents/Events/Events";
import Contact from "./PageComponents/Contact/Contact";
import Donate from "./PageComponents/Donate/Donate";
import PageLayout from './components/Layout/PageLayout';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout children={<Home />} />} />
          <Route path="about" element={<PageLayout children={<About />} />} />
          <Route path="events" element={<PageLayout children={<Events />} />} />
          <Route path="contact" element={<PageLayout children={<Contact />} />} />
          <Route path="donate" element={<PageLayout children={<Donate />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
