import Container from "@/components/Container";
import DividerNavLink from "@/components/DividerNavLink";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import React, { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

const HomeProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const splitTitle = SplitText.create("[data-title]", {
        type: "chars",
        mask: "chars",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      tl.from(splitTitle.chars, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.inOut",
      });
      tl.from(
        "[data-line]",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<20%",
      );
      tl.from(
        "[data-items]",
        {
          scale: 0.8,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
        },
        "<80%",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="Projects" url="/projects" />
        <ul className="mt-10 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:gap-10">
          {projects.slice(0, 4).map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HomeProjects;
