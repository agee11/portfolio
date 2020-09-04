import React from 'react';
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProjectContainer from "./components/ProjectContainer";
import Skills from "./components/Skills";
import WorkHistory from "./components/WorkHistory";
import './App.css';

function App() {

  return (
    <div>
      <Navigation />
      <Home />
      <ProjectContainer />
      <Skills />
      <WorkHistory />
      <Footer />
    </div>
  );
}

export default App;
