import Container from "@/components/Container";
import SkillCard from "@/components/SkillCard";
import { technologies } from "@/data/technologies";
import React, { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

const AboutSkills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: sectionRef.current,
        start: "top 85%",
      });

      tl.from("[data-items]", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="pt-6 md:pt-21">
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
