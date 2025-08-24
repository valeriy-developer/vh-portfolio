import Container from "@/components/Container";
import DividerNavLink from "@/components/DividerNavLink";
import SkillCard from "@/components/SkillCard";
import { technologies } from "@/data/technologies";
import React from "react";

const AboutSection = () => {
  return (
    <section className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="About" url="/about" />
        <div className="mt-10 flex gap-6 max-md:flex-col md:mt-16 md:gap-17">
          <p className="text-secondary-50 flex-1 text-lg md:text-xl lg:text-[1.375rem]">
            My passion lies in building performant and maintainable frontend
            architectures, applying modern frameworks and state management
            solutions to deliver scalable, reliable, and visually refined user
            interfaces.
          </p>
          <div className="flex-1 text-sm md:text-base lg:text-lg">
            <p>
              I have completed multiple advanced courses in JavaScript and React
              by Jonas Schmedtmann, as well as other development programs. This
              continuous learning path has strengthened my expertise in
              contemporary frontend practices, enabling me to craft solutions
              that are both technically solid and user-centric.
            </p>
            <ul className="mt-8 flex flex-col items-center gap-5">
              {technologies.slice(0, 3).map((technology, idx) => (
                <li key={idx} className="max-md:max-w-107.5">
                  <SkillCard technology={technology} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
