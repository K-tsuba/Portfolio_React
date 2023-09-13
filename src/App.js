// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Skill from './components/Skill';
import Works from './components/Works';
import TimeMe from './components/TimeMe';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/works" element={<Works />} />
          <Route path="/TimeMe" element={<TimeMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
