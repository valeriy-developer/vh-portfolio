import Container from "@/components/Container";
import SkillCard from "@/components/SkillCard";
import { technologies } from "@/data/technologies";
import React from "react";

const SkillsSection = () => {
  return (
    <section className="pt-6 md:pt-21">
      <Container>
        <ul className="grid grid-cols-2 gap-x-16 gap-y-8">
          {technologies.map((technology, idx) => (
            <SkillCard key={idx} technology={technology} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default SkillsSection;
