// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Skill from './components/Skill';
import Works from './components/Works';
import TimeMe from './components/TimeMe';
import QuizGame from './components/QuizGame';
import Contact from './components/Contact';
import Kagoyume from './components/Kagoyume';
import Portfolio from './components/Portfolio';
import TwitterHeader from './components/TwitterHeader';
import WebSiteMake from './components/WebSiteMake';
import LogoMake from './components/LogoMake';
import BannerAdvertisement from './components/BannerAdvertisement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/TimeMe" element={<TimeMe />} />
          <Route path="/ArchiQuiz" element={<QuizGame />} />
          <Route path="/Kagoyume" element={<Kagoyume />} />
          <Route path="/TwitterHeader" element={<TwitterHeader />} />
          <Route path="/WebSiteMake" element={<WebSiteMake />} />
          <Route path="/LogoMake" element={<LogoMake />} />
          <Route path="/BannerAdvertisement" element={<BannerAdvertisement />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
