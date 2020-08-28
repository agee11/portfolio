import React from "react";
import "./About.css";

class About extends React.Component{
  render(){
    return <div id="home" className="section-container">
      <div className="about-text-container">
      <h1>Andrew Gee</h1>
      <p className="about-text">A software developer based in San Francisco.  I graduated from UC Santa Cruz with a degree in Computer Science: Computer Game Design.  I continued my education through a mixture of online bootcamps and self-study.</p>
      </div>
    </div>
  }
}

export default About;
