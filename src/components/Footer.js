import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {

  render(){
    return <div id="social" className="social-container">
        <a className="social-links" href="https://github.com/agee11"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
        <a className="social-links" href="https://www.linkedin.com/in/andrew-gee-b3a11490/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
      </div>
  }
}

export default Footer;
