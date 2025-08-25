import Container from "@/components/Container";
import DividerNavLink from "@/components/DividerNavLink";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import React from "react";

const ProjectsSection = () => {
  return (
    <section className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="Projects" url="/projects" />
        <ul className="mt-10 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:gap-10">
          {projects.slice(0, 4).map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProjectsSection;
