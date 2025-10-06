"use client";

import Container from "@/components/Container";
import DividerNavLink from "@/components/DividerNavLink";
import SkillCard from "@/components/SkillCard";
import { technologies } from "@/data/technologies";
import { SplitText, useGSAP, gsap } from "@/lib/gsap";
import { useLoader } from "@/providers/LoaderProvider";
import React, { useRef } from "react";

const HomeAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isLoading } = useLoader();

  useGSAP(
    () => {
      const splitTitle = SplitText.create("[data-title]", {
        type: "chars",
        mask: "chars",
      });
      const splitText = SplitText.create("[data-text]", {
        type: "lines",
        mask: "lines",
      });

      gsap.set([splitTitle.chars, splitText.lines], { y: 40, opacity: 0 });
      gsap.set("[data-line]", { scaleX: 0, transformOrigin: "left" });
      gsap.set("[data-items]", { y: 80, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      tl.to(splitTitle.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.inOut",
      });
      tl.to(
        "[data-line]",
        { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
        "<20%",
      );
      tl.to(
        splitText.lines,
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<",
      );
      tl.to(
        "[data-items]",
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
        "<80%",
      );
    },
    { scope: sectionRef, dependencies: [isLoading] },
  );

  return (
    <section ref={sectionRef} className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="About" url="/about" />
        <div className="mt-10 flex gap-6 max-md:flex-col md:mt-16 md:gap-17">
          <p
            data-text
            className="text-secondary-50 flex-1 text-lg md:text-xl lg:text-[1.375rem]"
          >
            My passion lies in building performant and maintainable frontend
            architectures, applying modern frameworks and state management
            solutions to deliver scalable, reliable, and visually refined user
            interfaces.
          </p>
          <div className="flex-1 text-sm md:text-base lg:text-lg">
            <p data-text>
              I have completed multiple advanced courses in JavaScript and React
              by Jonas Schmedtmann, as well as other development programs. This
              continuous learning path has strengthened my expertise in
              contemporary frontend practices, enabling me to craft solutions
              that are both technically solid and user-centric.
            </p>
            <ul className="mt-8 flex flex-col items-center gap-5 max-md:mx-auto max-md:max-w-107.5">
              {technologies.slice(0, 3).map((technology, idx) => (
                <SkillCard key={idx} technology={technology} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;
