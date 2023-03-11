import React from "react";
import projects from "../../projects.json"

import ProjectCards from "./ProjectCard";

function Projects() {
    return (
      <div className="container">
        <h2>Some projects I've been working recently</h2>
        <div className="row">
        {projects.map((projects) => (
            <ProjectCards
              key={projects.id}       
              name={projects.name}
              image={projects.image}
              gitHub={projects.gitHub}
              deployed={projects.deployed}

            />
          ))}
        </div>
      </div>
    );
  }


export default Projects;

/*}
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
                   
                  <ProjectCards 
                  key={project.id}       
                  title={project.name}
                 image={project.image}
                 linkLive={project.linkLive}
                 linkRepo={project.linkRepo}
                  />
                      {/*<Card key={project.id} style={{ width: '18rem', margin: '10px'}}>
                        <Card.Img variant='top' src={project.image}/>
                        <Card.Body>
                          <Card.Title>{project.name}</Card.Title>
                          <Button variant="primary" href={project.gitHub} target="_blank" style={{margin: '5px'}}>GitHub</Button>
                          <Button variant="primary" href={project.deployed} target="_blank" style={{margin: '5px'}}>Demo</Button>
                        </Card.Body>
                <Card>              
                
            })}
            </Row>
        </Container>
        </div>
    )
} */

