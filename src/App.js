import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage/LandingPage';
import HeroImg from './components/HeroImg/HeroImg';
import About from './components/About/About';
import More from './components/More/More';
import Features from './components/Features/Features';
import GetNow from './components/GetNow/GetNow';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <HeroImg />
      <About />
      <More />
      <Features />
      <GetNow />
      <Footer />
    </div>
  );
}

export default App;
