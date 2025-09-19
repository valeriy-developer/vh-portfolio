"use client";

import { aboutpageSections } from "@/config/sections.config";

const AboutPage = () => {
  return (
    <>
      {aboutpageSections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default AboutPage;
