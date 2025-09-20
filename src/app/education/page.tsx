"use client";

import { educationPageSections } from "@/config/sections.config";

const EducationPage = () => {
  return (
    <>
      {educationPageSections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default EducationPage;
