import React from 'react';
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import About from "./components/About";
import ProjectContainer from "./components/ProjectContainer";
import Skills from "./components/Skills";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./japan2.jpg";
import "./japan3.jpg";

function App() {

  return (
    <div>
      <Navigation />
      <About />
      <ProjectContainer />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
