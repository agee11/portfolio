import React from 'react';
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import About from "./components/About";
import ProjectContainer from "./components/ProjectContainer";
import Skills from "./components/Skills";
import WorkHistory from "./components/WorkHistory";
import './App.css';

function App() {

  return (
    <div>
      <Navigation />
      <About />
      <ProjectContainer />
      <Skills />
      <WorkHistory />
      <Footer />
    </div>
  );
}

export default App;
