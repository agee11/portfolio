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
    console.log(this.state.projects)
    return <div>
    <h1 id="projects" className="section-title">My Projects</h1>
      <div className="project-container">
      {!empty && this.state.projects.map((project,index) =>
        <ProjectDisplay key={index} id={index} projectInfo={project}/>
      )}
      </div>
    </div>
  }
}

export default ProjectContainer;
