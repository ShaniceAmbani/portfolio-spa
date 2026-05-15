import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p>No projects found</p>;
  }

  return (
    <div className="grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;