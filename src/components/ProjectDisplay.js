import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'

class ProjectDisplay extends React.Component{
    //<Card.Img variant="left" src="https://colorpalettes.net/wp-content/uploads/2020/05/color-palette-4214.png"/>
  render(){
    return <Card className="projectDisplay">
    <Card.Header>{this.props.projectInfo.name}</Card.Header>
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
    <Card.Body>
    <Card.Title>Features</Card.Title>
    <Card.Text>
    <ul>
    {this.props.projectInfo.features.map((item,index) =>
      <li key={index}>{item}</li>
    )}
    </ul>
    </Card.Text>
    <Card.Title>Tools Used</Card.Title>
    <Card.Text>
    <ul>
    {this.props.projectInfo.skills.map((item,index) =>
      <li key={index}>{item}</li>
    )}
    </ul>
    </Card.Text>
    <div className="center">
    <a className="social-links" href={this.props.projectInfo.demo_url} title="Demo"><FontAwesomeIcon icon={faDesktop}/></a>
    <a className="social-links" href={this.props.projectInfo.github_url} title="Github"><FontAwesomeIcon icon={faCode}/></a>
    </div>
    </Card.Body>
    </Card>
  }
}

export default ProjectDisplay;
