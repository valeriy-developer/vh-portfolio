"use client";

import { projectspageSections } from "@/config/sections.config";

const ProjectsPage = () => {
  return (
    <>
      {projectspageSections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default ProjectsPage;
