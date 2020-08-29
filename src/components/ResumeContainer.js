import React from "react";
import Skills from "./Skills.js";
import WorkHistory from "./WorkHistory.js";

function ResumeContainer(){
  return (
    <div id="resume" className="section-container">
      <Skills />
      <WorkHistory />
    </div>
  )
}

export default ResumeContainer;
