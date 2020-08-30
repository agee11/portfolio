import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDesktop, faDatabase, faTools} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

class Skills extends React.Component{


  render(){
    return <div>
    <h1 className="section-title">SKILLS</h1>
    <div className="skills-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FontAwesomeIcon icon={faDesktop} size="3x"/><h3>FrontEnd Skills</h3>
          </div>
          <div className="flip-card-back">
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FontAwesomeIcon icon={faDatabase} size="3x"/><h3>BackEnd Skills</h3>
          </div>
          <div className="flip-card-back">
            <ul className="skills-list">
              <li>Node JS</li>
              <li>ExpressJS</li>
              <li>SQL</li>
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FontAwesomeIcon icon={faTools} size="3x"/><h3>Other Skills</h3>
          </div>
          <div className="flip-card-back">
            <ul className="skills-list">
              <li>Github</li>
              <li>Jira</li>
              <li>NPM</li>
              <li>Perforce</li>
              <li>TargetProcess</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  }
}


export default Skills;
