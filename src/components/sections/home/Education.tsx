import Container from "@/components/Container";
import DividerNavLink from "@/components/DividerNavLink";
import { education } from "@/data/education";
import React, { useRef } from "react";
import CareerCard from "@/components/CareerCard";
import { useGSAP, SplitText, gsap } from "@/lib/gsap";

const HomeEducation = () => {
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
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<50%",
      );
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
    <section ref={sectionRef} className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="Education" url="/education" />
        <ul className="mt-10 grid grid-cols-1 gap-x-0 gap-y-14 md:mt-16 md:grid-cols-2 md:gap-x-14 md:gap-y-18 lg:gap-x-17">
          {education.slice(0, 4).map((educationItem, idx) => (
            <CareerCard key={idx} career={educationItem} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HomeEducation;
