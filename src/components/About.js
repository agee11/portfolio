import React from "react";
import "./About.css";

class About extends React.Component{

  render(){
    return <div id="home" className="section-container">
      <div className="about-text-container">
        <h1>Hello, I'm <span className="name-highlight">Andrew Gee</span></h1>
        <div className="ticker-container">
          <p className="about-text">I'm a</p>
          <ul className="ticker-list">
            <li className="ticker-item">web developer.</li>
            <li className="ticker-item">problem solver.</li>
            <li className="ticker-item">Bay Area native.</li>
            <li className="ticker-item">49er fan.</li>
            <li className="ticker-item">snowboarder.</li>
          </ul>
        </div>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" >
        <polygon points="0,0 50,100 100,0 100,100 0,100"/>
      </svg>
    </div>
  }
}

export default About;
