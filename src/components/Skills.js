import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faHtml5, faGithub, faCss3, faReact, faBootstrap, faNodeJs, faJira} from '@fortawesome/free-brands-svg-icons'
import {faDesktop, faDatabase, faTools} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

class Skills extends React.Component{


  render(){
    return <div id="resume" className="section-container">
    <h1 className="section-title">My Skills</h1>
    <div className="skills-content skills-container">
      <div>
        <FontAwesomeIcon icon={faDesktop} size="3x"/><h3>FrontEnd Skills</h3>
        <hr/>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
        </ul>
      </div>
      <div>
        <FontAwesomeIcon icon={faDatabase} size="3x"/><h3>BackEnd Skills</h3>
        <hr/>
        <ul className="skills-list">
          <li>Node JS</li>
          <li>ExpressJS</li>
          <li>SQL</li>
          <li>Firebase</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <div>
        <FontAwesomeIcon icon={faTools} size="3x"/><h3>Other Skills</h3>
        <hr/>
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
  }
}


export default Skills;
