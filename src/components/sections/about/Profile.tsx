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
              Hi, I&rsquo;m Valeriy — a frontend developer passionate about
              building applications that are not only functional but also
              enjoyable to use. For me, frontend development is the perfect mix
              of logic, creativity, and problem-solving.
            </p>
            <div className="mt-8 space-y-2">
              <p data-text>
                I specialize in React, Next.js, and modern state management
                tools, with a strong focus on performance and clean,
                maintainable code. Over the past years, I&rsquo;ve worked on
                projects ranging from e-commerce platforms to trading systems,
                always striving to make the user&rsquo;s experience smooth and
                intuitive.
              </p>
              <p data-text>
                I love exploring new technologies and improving workflows.
                Outside of coding, I find inspiration in continuous learning and
                creative hobbies, which often bring fresh ideas into my
                development work.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutProfile;
