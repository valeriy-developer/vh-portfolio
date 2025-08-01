"use client";

import Container from "@/components/Container";
import Sparkle from "@/components/icons/Sparkle";

const HomePage = () => {
  return (
    <Container className="pt-12.5 md:pt-20">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-secondary-50 text-sm font-medium tracking-[0.08em] uppercase">
          Building interfaces since — Y:2020
        </p>
        <h1 className="font-big-shoulders text-accent easing mt-3 text-6xl leading-[1em] font-black tracking-[-0.02em] uppercase md:text-9xl lg:mt-2.5 lg:text-[12.5rem]">
          Valeriy <br /> Hnybidenko
        </h1>
        <Sparkle className="text-accent mt-8 h-8 w-8 md:h-12 md:w-12" />
        <p className="easing mt-8 max-w-[24rem] leading-[1.8em] md:max-w-[25rem] md:text-lg lg:max-w-[33rem] lg:text-[1.375rem]">
          I’m Valeriy Hnybydenko — a frontend developer with 3+ years of
          experience building fast and maintainable apps with modern frameworks.
        </p>
      </div>
    </Container>
  );
};

export default HomePage;
