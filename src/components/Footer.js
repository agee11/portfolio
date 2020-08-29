import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {

  return <div id="social" className="social-container">
      <a className="links" href="https://github.com/agee11" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
      <a className="links" href="https://www.linkedin.com/in/andrew-gee-b3a11490/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
      <a className="links" href="mailto: a.gee5@yahoo.com?subject=Portfolio Contact" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
    </div>
}

export default Footer;
