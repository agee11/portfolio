import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
import "./ProjectDisplay.css";

class ProjectDisplay extends React.Component{
  render(){
    return <div className="projectDisplay">
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
      <h2 className="project-title">{this.props.projectInfo.name}</h2>
        <div>
          {this.props.projectInfo.features.map((item,index) =>
            <p key={index}>{item}</p>
          )}
        </div>
        <div className="tech-list">
          {this.props.projectInfo.skills.map((item,index) =>
            <span className="tech-item" key={index}>{item}</span>
          )}
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
