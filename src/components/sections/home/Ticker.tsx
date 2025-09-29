import Container from "@/components/Container";
import Sparkle from "@/components/icons/Sparkle";
import TickerGroup from "@/components/TickerGroup";
import { technologies } from "@/data/technologies";
import React, { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

const HomeTicker = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      tl.from("[data-left-ticker]", {
        opacity: 0,
        duration: 1.4,
        ease: "power2.inOut",
      });
      tl.from(
        "[data-right-ticker]",
        {
          opacity: 0,
          duration: 1.4,
          ease: "power2.inOut",
        },
        "<",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="overflow-hidden pt-20 md:pt-37.5">
      <Container className="px-0 md:px-6 lg:px-28">
        <TickerGroup>
          <div className="mr-5.5 flex items-center gap-5.5">
            {technologies.map((technology, idx) => (
              <div
                key={idx}
                className="text-accent font-big-shoulders flex items-center gap-5.5 text-[5rem] font-black uppercase max-md:leading-[1.2em] md:text-9xl"
              >
                <p>{technology.label}</p>
                <Sparkle className="text-secondary/10 h-8 w-8" />
              </div>
            ))}
          </div>
        </TickerGroup>
      </Container>
    </section>
  );
};

export default HomeTicker;
