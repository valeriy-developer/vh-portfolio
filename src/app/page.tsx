"use client";

import { homePageSections } from "@/config/sections.config";

const HomePage = () => {
  return (
    <>
      {homePageSections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default HomePage;
