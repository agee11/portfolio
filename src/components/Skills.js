import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faHtml5, faGithub, faCss3, faReact, faBootstrap, faNodeJs, faJira} from '@fortawesome/free-brands-svg-icons'

class Skills extends React.Component{


  render(){
    return <div>
    <h1 id="resume" className="center">My Skills</h1>
    <div className="skills-container">
      <div>
        <h3>FrontEnd Skills</h3>
        <ul>
          <li><FontAwesomeIcon icon={faJsSquare} size="3x"/></li>
          <li><FontAwesomeIcon icon={faCss3} size="3x"/></li>
          <li><FontAwesomeIcon icon={faHtml5} size="3x"/></li>
          <li><FontAwesomeIcon icon={faReact} size="3x"/></li>
          <li><FontAwesomeIcon icon={faBootstrap} size="3x"/></li>
          <li><h3>jQuery</h3></li>
        </ul>
      </div>
      <div>
        <h3>BackEnd Skills</h3>
        <ul>
          <li><FontAwesomeIcon icon={faNodeJs} size="3x"/></li>
          <li><h3>ExpressJS</h3></li>
          <li><h3>SQL</h3></li>
          <li><h3>Firebase</h3></li>
        </ul>
      </div>
      <div>
        <h3>Other Skills</h3>
        <ul>
          <li><FontAwesomeIcon icon={faGithub} size="3x"/></li>
          <li><FontAwesomeIcon icon={faJira} size="3x"/></li>
        </ul>
      </div>
    </div>
    </div>
  }
}


export default Skills;
