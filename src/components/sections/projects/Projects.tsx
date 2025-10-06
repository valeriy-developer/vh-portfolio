import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { gsap, useGSAP } from "@/lib/gsap";

import React, { useRef } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      tl.from("[data-items]", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef}>
      <Container>
        <ul className="mt-10 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProjectsSection;
