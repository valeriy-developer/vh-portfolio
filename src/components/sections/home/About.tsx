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
            I build digital interfaces that combine precision, motion, and
            clarity. My goal is to make complex interactions feel effortless and
            intuitive for users. Every project starts with understanding the
            idea — and ends with a polished, meaningful experience.
          </p>
          <div className="flex-1 text-sm md:text-base lg:text-lg">
            <p data-text>
              I work with React, Next.js, and TypeScript, focusing on
              performance, maintainability, and design consistency. My
              experience spans from AI chat systems and dashboards to Web3 and
              e-commerce platforms. I care about clean architecture,
              accessibility, and smooth animation — the small details that make
              products truly stand out.
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
