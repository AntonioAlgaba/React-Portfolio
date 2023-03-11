import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../projects.json"


function ProjectGallery (){
  return (
    <Container fluid="md">
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "black" }}>
        Here are a few projects I've worked on recently.
      </p>
      {projects.map(project => (
        <Container>
          <Row>
            
            
           
          </Row>
        </Container>
      ))}
    </Container>
  );
}

export default ProjectGallery;