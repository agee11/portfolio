import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faHtml5, faGithub, faCss3, faReact, faBootstrap, faNodeJs, faJira} from '@fortawesome/free-brands-svg-icons'

class Skills extends React.Component{


  render(){
    return <div id="resume" className="section-container">
    <h1 className="section-title skills-title">My Skills</h1>
    <div className="skills-content skills-container">
      <div>
        <h3>FrontEnd Skills</h3>
        <ul className="skills-list">
          <li><FontAwesomeIcon icon={faJsSquare} size="3x"/> <p>JavaScript</p></li>
          <li><FontAwesomeIcon icon={faCss3} size="3x"/> <p>CSS</p></li>
          <li><FontAwesomeIcon icon={faHtml5} size="3x"/> <p>HTML</p></li>
          <li><FontAwesomeIcon icon={faReact} size="3x"/> <p>React</p></li>
          <li><FontAwesomeIcon icon={faBootstrap} size="3x"/> <p>Bootstrap</p></li>
          <li><p>jQuery</p></li>
        </ul>
      </div>
      <div>
        <h3>BackEnd Skills</h3>
        <ul className="skills-list">
          <li><FontAwesomeIcon icon={faNodeJs} size="3x"/> <p>Node JS</p></li>
          <li><p> ExpressJS</p></li>
          <li><p> SQL</p></li>
          <li><p> Firebase</p></li>
          <li><p> MongoDB</p></li>
          <li><p> Mongoose</p></li>
        </ul>
      </div>
      <div>
        <h3>Other Skills</h3>
        <ul className="skills-list">
          <li><FontAwesomeIcon icon={faGithub} size="3x"/> <p>Github</p></li>
          <li><FontAwesomeIcon icon={faJira} size="3x"/> <p>Jira</p></li>
        </ul>
      </div>
    </div>
    </div>
  }
}


export default Skills;
