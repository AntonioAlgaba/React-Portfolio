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



