import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import About from "./PageComponents/About/About";
import Contact from "./PageComponents/Contact/Contact";
import Donate from "./PageComponents/Donate/Donate";
import Events from "./PageComponents/Events/Events";
import Home from "./PageComponents/Home/Home";
import NotFound from "./PageComponents/NotFound";
import PageLayout from './components/Layout/PageLayout';
import './styles/main.scss';
import CornholeEvent from './PageComponents/PopupEvents/CornholeEvent';


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
          <Route path="cornhole-event"
            element={<CornholeEvent />} />
          <Route path="cornhole-event/donate"
            element={<PageLayout children={
              <Donate
                title='Buy tickets to the 3rd Annual PMF Foundation Cornhole torunament by March 15th'
                action='Buy tickets through'
                qrLink={require("./media/cornhole-qr-code.png")}
                formLink={"https://www.zeffy.com/embed/ticketing/3rd-annual-philip-morgan-foundation-cornhole-tournament-fundraiser"} />
            } />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
