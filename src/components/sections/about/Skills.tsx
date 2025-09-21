import Container from "@/components/Container";
import SkillCard from "@/components/SkillCard";
import { technologies } from "@/data/technologies";
import React from "react";

const AboutSkills = () => {
  return (
    <section className="pt-6 md:pt-21">
      <Container>
        <ul className="mx-auto grid grid-cols-1 gap-x-16 gap-y-8 max-md:max-w-107.5 md:grid-cols-2">
          {technologies.map((technology, idx) => (
            <SkillCard key={idx} technology={technology} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AboutSkills;
