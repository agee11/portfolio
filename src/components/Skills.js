import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDesktop, faDatabase, faTools} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";
import logo from "../logo.jpg";

class Skills extends React.Component{


  render(){
    return (
      <div id="resume" className="section-container">
        <div className="about-me">
          <img src={logo} alt="profile"/>
          <p>I'm a software developer based in San Francisco. Games fostered my passion for problem solving and fueled my interest in new technologies. I look forward to new challenges that can expand my growing skillset.</p>
          <p>I graduated from UC Santa Cruz with a degree in Computer Science: Computer Game Design. I continued my education through a mixture of online bootcamps and self-study.</p>
        </div>
        <div className="skills-container">
          <div className="skills-section">
            <FontAwesomeIcon icon={faDesktop} size="2x"/><h3>FRONTEND</h3>
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div className="skills-section">
            <FontAwesomeIcon icon={faDatabase} size="2x"/><h3>BACKEND</h3>
            <ul className="skills-list">
              <li>Node JS</li>
              <li>ExpressJS</li>
              <li>SQL</li>
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
          <div className="skills-section">
            <FontAwesomeIcon icon={faTools} size="2x"/><h3>OTHER</h3>
            <ul className="skills-list">
              <li>Github</li>
              <li>Jira</li>
              <li>NPM</li>
              <li>Perforce</li>
              <li>TargetProcess</li>
            </ul>
          </div>
        </div>
        <svg className="divider" viewBox="0 0 100 100" preserveAspectRatio="none" >
          <polygon points="0,0 50,100 100,0 100,100 0,100"/>
        </svg>
      </div>
    )
  }
}


export default Skills;
