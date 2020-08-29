(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,a,t){e.exports=t(80)},49:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),i=(t(49),t(24)),s=t(21);var o=function(){return l.a.createElement("div",{className:"top-bar"},l.a.createElement(i.a,{fixed:"top",bg:"nav",variant:"dark",expand:"sm"},l.a.createElement(i.a.Brand,null,"AG"),l.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(i.a.Collapse,null,l.a.createElement(s.a,null,l.a.createElement(s.a.Link,{href:"#home"},"Home"),l.a.createElement(s.a.Link,{href:"#projects"},"Projects"),l.a.createElement(s.a.Link,{href:"#resume"},"Skills"),l.a.createElement(s.a.Link,{href:"#social"},"Contact Me")))))},m=t(7),u=t(31),E=t(9);t(57);var p=function(){return l.a.createElement("div",{id:"social",className:"social-container"},l.a.createElement("a",{className:"links",href:"https://github.com/agee11",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(m.a,{icon:u.a,size:"2x"})),l.a.createElement("a",{className:"links",href:"https://www.linkedin.com/in/andrew-gee-b3a11490/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(m.a,{icon:u.b,size:"2x"})),l.a.createElement("a",{className:"links",href:"mailto: a.gee5@yahoo.com?subject=Portfolio Contact",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(m.a,{icon:E.d,size:"2x"})))},d=t(11),f=t(12),h=t(14),v=t(13),b=(t(58),function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"section-container"},l.a.createElement("div",{className:"about-text-container"},l.a.createElement("h1",null,"Andrew Gee"),l.a.createElement("p",{className:"about-text"},"A software developer based in San Francisco.  I graduated from UC Santa Cruz with a degree in Computer Science: Computer Game Design.  I continued my education through a mixture of online bootcamps and self-study.")))}}]),t}(l.a.Component)),k=t(32),N=(t(59),function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"projectDisplay"},l.a.createElement(k.a,null,this.props.projectInfo.image.map((function(e,a){return l.a.createElement(k.a.Item,{key:a},l.a.createElement("img",{className:"d-block project-img w-100",src:e,alt:"Slide"+a}))}))),l.a.createElement("div",{className:"project-info"},l.a.createElement("h2",{className:"project-title"},this.props.projectInfo.name),l.a.createElement("div",null,this.props.projectInfo.features.map((function(e,a){return l.a.createElement("p",{key:a},e)}))),l.a.createElement("div",{className:"tech-list"},this.props.projectInfo.skills.map((function(e,a){return l.a.createElement("span",{className:"tech-item",key:a},e)}))),l.a.createElement("div",{className:"project-links"},l.a.createElement("a",{className:"links",href:this.props.projectInfo.demo_url,target:"_blank",rel:"noopener noreferrer",title:"Demo"},l.a.createElement(m.a,{icon:E.c,size:"2x"})),l.a.createElement("a",{className:"links",href:this.props.projectInfo.github_url,target:"_blank",rel:"noopener noreferrer",title:"Github"},l.a.createElement(m.a,{icon:E.a,size:"2x"})))))}}]),t}(l.a.Component)),g=t(43),j=t.n(g),y=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={projects:[]},n}return Object(f.a)(t,[{key:"componentDidMount",value:function(){this.getProjectData()}},{key:"getProjectData",value:function(){var e=this;j.a.get("https://pacific-crag-75180.herokuapp.com/projects").then((function(a){e.setState({projects:a.data})}))}},{key:"render",value:function(){var e;return e=this.state.projects.length<1?l.a.createElement("div",{className:"spinner-border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")):this.state.projects.map((function(e,a){return l.a.createElement(N,{key:a,id:a,projectInfo:e})})),l.a.createElement("div",{id:"projects",className:"section-container"},l.a.createElement("h1",{className:"section-title"},"My Projects"),l.a.createElement("div",{className:"project-container"},e))}}]),t}(l.a.Component),w=(t(76),function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"section-title"},"Skills"),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"flip-card"},l.a.createElement("div",{className:"flip-card-inner"},l.a.createElement("div",{className:"flip-card-front"},l.a.createElement(m.a,{icon:E.c,size:"3x"}),l.a.createElement("h3",null,"FrontEnd Skills")),l.a.createElement("div",{className:"flip-card-back"},l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Bootstrap"),l.a.createElement("li",null,"jQuery"))))),l.a.createElement("div",{className:"flip-card"},l.a.createElement("div",{className:"flip-card-inner"},l.a.createElement("div",{className:"flip-card-front"},l.a.createElement(m.a,{icon:E.b,size:"3x"}),l.a.createElement("h3",null,"BackEnd Skills")),l.a.createElement("div",{className:"flip-card-back"},l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",null,"Node JS"),l.a.createElement("li",null,"ExpressJS"),l.a.createElement("li",null,"SQL"),l.a.createElement("li",null,"Firebase"),l.a.createElement("li",null,"MongoDB"),l.a.createElement("li",null,"Mongoose"))))),l.a.createElement("div",{className:"flip-card"},l.a.createElement("div",{className:"flip-card-inner"},l.a.createElement("div",{className:"flip-card-front"},l.a.createElement(m.a,{icon:E.e,size:"3x"}),l.a.createElement("h3",null,"Other Skills")),l.a.createElement("div",{className:"flip-card-back"},l.a.createElement("ul",{className:"skills-list"},l.a.createElement("li",null,"Github"),l.a.createElement("li",null,"Jira"),l.a.createElement("li",null,"NPM"),l.a.createElement("li",null,"Perforce"),l.a.createElement("li",null,"TargetProcess")))))))}}]),t}(l.a.Component));t(77);var S=function(){return l.a.createElement("div",{className:"work-section"},l.a.createElement("h1",null,"Work History"),l.a.createElement("div",null,l.a.createElement("h3",null,"QA/Devops Engineer at",l.a.createElement("a",{className:"links",href:"https://www.magicfuelgames.com/",target:"_blank",rel:"noopener noreferrer"},"Magic Fuel Games")),l.a.createElement("p",null,"Jan 2017 - Mar 2020"),l.a.createElement("ul",null,l.a.createElement("li",null,"Responsible for maintaining CI/CD pipelines"),l.a.createElement("li",null,"Coordinated the rollout of updates in partnership with the QA/Engineering team"),l.a.createElement("li",null,"Handled general admin work for the team via our version control system Perforce"),l.a.createElement("li",null,"Build and maintain automated tests suites for their mobile games"))),l.a.createElement("div",null,l.a.createElement("h3",null,"QA Analyst at",l.a.createElement("a",{className:"links",href:"https://www.nexon.com/main/en",target:"_blank",rel:"noopener noreferrer"},"Nexon M")),l.a.createElement("p",null,"Mar 2015 - Sept 2016"),l.a.createElement("ul",null,l.a.createElement("li",null,"Responsible for testing several aspects of a product such as; network stability, security, game balance, IAPs, UI, and so on"),l.a.createElement("li",null,"Involved in testing the company\u2019s internal analytics system"),l.a.createElement("li",null,"Learned SQL as well as a program called DBVisualizer in order to search and verify the analytics events sent from their library of products"))))};var x=function(){return l.a.createElement("div",{id:"resume",className:"section-container"},l.a.createElement(w,null),l.a.createElement(S,null))};t(78),t(79);var O=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(b,null),l.a.createElement(y,null),l.a.createElement(x,null),l.a.createElement(p,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.986f6a62.chunk.js.map