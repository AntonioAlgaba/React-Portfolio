import React from "react";
import projects from "../../projects.json"
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button} from 'react-bootstrap'
//import ProjectCards from "./ProjectCard";

function Projects (){
    return (
        <div>
        <Container>
           <h1>My recent Works</h1>
           <p>Here a few projects I've worked on recently in the bootcamp</p>
        </Container>
        <Container>
           <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>        
            {projects.map((project) => {
                return (            
                      <Card key={project.id} style={{ width: '18rem', margin: '10px'}}>
                        <Card.Img variant='top' src={project.image}/>
                        <Card.Body>
                          <Card.Title>{project.name}</Card.Title>
                          <Button variant="primary" href={project.gitHub} target="_blank" style={{margin: '5px'}}>GitHub</Button>
                          <Button variant="primary" href={project.deployed} target="_blank" style={{margin: '5px'}}>Demo</Button>
                        </Card.Body>
                      </Card>              
                )
            })}
            </Row>
        </Container>
        </div>
    )
}

export default Projects