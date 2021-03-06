import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../logo.jpg";

function Navigation() {

    return <div className="top-bar">
        <Navbar fixed="top" bg="nav" variant="dark" expand="sm">
          <Navbar.Brand><img width="40px" src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#social">Contact Me</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>;
}

export default Navigation;
