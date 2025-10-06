"use client";

import { projectsPageSections } from "@/config/sections.config";

const ProjectsPage = () => {
  return (
    <>
      {projectsPageSections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default ProjectsPage;
