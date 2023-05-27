import './main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";


function App() {

  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
