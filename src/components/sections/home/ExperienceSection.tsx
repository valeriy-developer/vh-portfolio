import Container from "@/components/Container";
import DividerNavLink from "@/components/DividerNavLink";
import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/data/experience";
import React from "react";

const ExperienceSection = () => {
  return (
    <section className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="Experience" url="/experience" />
        <ul className="mt-10 grid grid-cols-1 gap-x-0 gap-y-14 md:mt-16 md:grid-cols-2 md:gap-x-14 md:gap-y-18 lg:gap-x-17">
          {experience.slice(0, 4).map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ExperienceSection;
