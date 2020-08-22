import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {

  render(){
    return <div id="social" className="social-container">
        <a className="social-links" href="https://github.com/agee11" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
        <a className="social-links" href="https://www.linkedin.com/in/andrew-gee-b3a11490/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
        <a className="social-links" href="mailto: a.gee5@yahoo.com?subject=Portfolio Contact" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
      </div>
  }
}

export default Footer;
