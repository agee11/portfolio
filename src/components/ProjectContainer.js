import React from "react";
import ProjectDisplay from "./ProjectDisplay";
import axios from "axios";

class ProjectContainer extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    this.getProjectData();
  }

  getProjectData(){
    axios.get(process.env.REACT_APP_SERVER_URL)
    .then((response) => {
      this.setState({
        projects: response.data
      });
    })
  }

  render(){
    let empty = this.state.projects.length < 1;
    let content;
    if(!empty){
      content = this.state.projects.map((project,index) =>
      <ProjectDisplay key={index} id={index} projectInfo={project}/>
    )}else{
      content = <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    }
    return <div id="projects" className="section-container">
    <h1 className="section-title">My Projects</h1>
      <div className="project-container">
      {content}
      </div>
    </div>
  }
}

export default ProjectContainer;
