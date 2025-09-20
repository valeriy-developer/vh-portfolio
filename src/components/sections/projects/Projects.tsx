import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

import React from "react";

const ProjectsSection = () => {
  return (
    <section>
      <Container>
        <ul className="mt-10 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProjectsSection;
