import Container from "@/components/Container";
import Sparkle from "@/components/icons/Sparkle";
import { technologies } from "@/data/technologies";
import React from "react";
import Marquee from "react-fast-marquee";

const TickerSection = () => {
  return (
    <section className="overflow-hidden pt-20 md:pt-37.5">
      <Container className="px-0 md:px-6 lg:px-28">
        <div className="relative flex flex-col gap-3">
          <div className="easing from-primary via-primary/90 pointer-events-none absolute top-0 -right-1 z-10 h-full w-20 bg-gradient-to-l to-transparent" />
          <div className="easing from-primary via-primary/90 pointer-events-none absolute top-0 -left-1 z-10 h-full w-20 bg-gradient-to-r to-transparent" />
          <Marquee autoFill speed={80} className="overflow-hidden!">
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
          </Marquee>
          <Marquee
            direction="right"
            autoFill
            speed={80}
            className="overflow-hidden!"
          >
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
          </Marquee>
        </div>
      </Container>
    </section>
  );
};

export default TickerSection;
