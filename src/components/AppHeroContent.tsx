import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import Container from "./Container";
import Sparkle from "./icons/Sparkle";
import { usePathname } from "next/navigation";
import { useGSAP, SplitText, gsap } from "@/lib/gsap";

interface Props {
  title: string;
  className?: string;
}

const AppHeroContent = ({ title, className }: Props) => {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const splitTitle = SplitText.create("[data-title]", {
        type: "chars",
      });

      const tl = gsap.timeline();

      tl.from(
        splitTitle.chars,
        {
          y: 60,
          opacity: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "+=0.3",
      );
      tl.from(
        "[data-sparkle]",
        {
          scale: 0.6,
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<50%",
      );
    },
    { scope: sectionRef, dependencies: [pathname] },
  );

  return (
    <section ref={sectionRef}>
      <Container
        className={cn(
          "col-center font-big-shoulders text-accent easing-text pt-28 text-[5rem] leading-[1em] font-black uppercase md:pt-36 md:text-[11.25rem]",
          className,
        )}
      >
        <h1 data-title>{title}</h1>
        <div data-sparkle>
          <Sparkle className="mt-6.5 max-md:h-8 max-md:w-8" />
        </div>
      </Container>
    </section>
  );
};

export default AppHeroContent;
