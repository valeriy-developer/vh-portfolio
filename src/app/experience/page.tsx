"use client";

import { experiencePageSections } from "@/config/sections.config";

const ExperiencePage = () => {
  return (
    <>
      {experiencePageSections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default ExperiencePage;
