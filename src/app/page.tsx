"use client";

import { homepageSections } from "@/config/sections.config";

const HomePage = () => {
  return (
    <>
      {homepageSections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default HomePage;
