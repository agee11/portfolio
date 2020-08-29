import React from "react";
import "./WorkHistory.css";

function WorkHistory(){
  return (
    <div className="work-section">
      <h1>Work History</h1>
      <div>
        <h3>QA/Devops Engineer at<a className="links" href="https://www.magicfuelgames.com/" target="_blank" rel="noopener noreferrer">Magic Fuel Games</a></h3>
        <p>Jan 2017 - Mar 2020</p>
        <div className="work-highlight">
          <ul>
            <li>Responsible for maintaining CI/CD pipelines</li>
            <li>Coordinated the rollout of updates in partnership with the QA/Engineering team</li>
            <li>Handled general admin work for the team via our version control system Perforce</li>
            <li>Build and maintain automated tests suites for their mobile games</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>QA Analyst at<a className="links" href="https://www.nexon.com/main/en" target="_blank" rel="noopener noreferrer">Nexon M</a></h3>
        <p>Mar 2015 - Sept 2016</p>
        <div className="work-highlight">
          <ul>
            <li>Responsible for testing several aspects of a product such as; network stability, security, game balance, IAPs, UI, and so on</li>
            <li>Involved in testing the company’s internal analytics system</li>
            <li>Learned SQL as well as a program called DBVisualizer in order to search and verify the analytics events sent from their library of products</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkHistory;
