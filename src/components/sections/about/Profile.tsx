import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import React, { useRef } from "react";
import { useGSAP, SplitText, gsap } from "@/lib/gsap";

const AboutProfile = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const splitText = SplitText.create("[data-text]", {
        type: "lines",
        mask: "lines",
      });

      const tl = gsap.timeline();

      tl.from(
        splitText.lines,
        {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "+=0.3",
      );
      tl.from(
        "[data-profile-card]",
        {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<10%",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="pt-16 md:pt-25">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
          <ProfileCard className="shrink-0" />
          <div className="flex-1 text-sm md:text-base lg:max-w-[440px] lg:text-lg">
            <p
              data-text
              className="text-secondary-50 text-lg md:text-xl lg:text-[1.375rem]"
            >
              Hi, I&rsquo;m Valeriy — a frontend developer focused on creating
              performant and visually refined digital experiences.
            </p>
            <div className="mt-8 space-y-2">
              <p data-text>
                Over the past few years, I&rsquo;ve built a range of
                applications — from AI-powered chat platforms and interactive
                onboarding flows with WebGL to trading dashboards and custom
                e-commerce systems.
              </p>
              <p data-text>
                My expertise lies in React, Next.js, and modern state management
                tools like Zustand and Redux. I pay close attention to
                architecture, performance, and accessibility — ensuring every
                product is both elegant and reliable.
              </p>
              <p data-text>
                I&rsquo;m constantly learning and exploring new technologies,
                aiming to make development workflows cleaner and more efficient.
                Outside of coding, I enjoy creative hobbies that often bring
                fresh perspectives to my work.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutProfile;
