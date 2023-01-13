import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectDisplay = projects.map(project => {
    return(
    <ProjectItem key={project.about} name={project.name} about={project.about} technologies={project.technologies}/>
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectDisplay}</div>
    </div>

  );
}

export default ProjectList;
