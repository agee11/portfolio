import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'

class ProjectDisplay extends React.Component{
    //<Card.Img variant="left" src="https://colorpalettes.net/wp-content/uploads/2020/05/color-palette-4214.png"/>
  render(){
    return <div className="projectDisplay">
    <h2 className="project-title">{this.props.projectInfo.name}</h2>
      <Carousel>
      {this.props.projectInfo.image.map((url,index) =>
        <Carousel.Item key={index}>
          <img
            className="d-block project-img w-100"
            src={url}
            alt={"Slide" + index}
          />
        </Carousel.Item>
      )}
      </Carousel>
      <div className="project-info">
        <div>
          <h3>Features</h3>
          <ul>
          {this.props.projectInfo.features.map((item,index) =>
            <li key={index}>{item}</li>
          )}
          </ul>
        </div>
        <div>
          <h3>Tech Stack</h3>
          <ul>
          {this.props.projectInfo.skills.map((item,index) =>
            <li key={index}>{item}</li>
          )}
          </ul>
        </div>
        <div className="project-links">
          <a className="social-links" href={this.props.projectInfo.demo_url} target="_blank" title="Demo"><FontAwesomeIcon icon={faDesktop} size="2x"/></a>
          <a className="social-links" href={this.props.projectInfo.github_url} target="_blank" title="Github"><FontAwesomeIcon icon={faCode} size="2x"/></a>
        </div>
      </div>
    </div>
  }
}

export default ProjectDisplay;
