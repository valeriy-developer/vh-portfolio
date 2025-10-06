"use client";

import { aboutPageSections } from "@/config/sections.config";

const AboutPage = () => {
  return (
    <>
      {aboutPageSections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default AboutPage;
