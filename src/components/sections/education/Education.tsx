import CareerCard from "@/components/CareerCard";
import Container from "@/components/Container";

import { education } from "@/data/education";
import { useGSAP, gsap } from "@/lib/gsap";
import React, { useRef } from "react";

const EducationSection = () => {
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
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.inOut",
      });
      tl.from("[data-card-line]", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="pt-20 md:pt-25">
      <Container>
        <ul className="grid grid-cols-1 gap-x-0 gap-y-14 md:grid-cols-2 md:gap-x-14 md:gap-y-18 lg:gap-x-17">
          {education.map((educationItem, idx) => (
            <CareerCard key={idx} career={educationItem} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default EducationSection;
