import { cn } from "@/lib/utils";
import React from "react";
import Container from "./Container";
import Sparkle from "./icons/Sparkle";

interface Props {
  title: string;
  className?: string;
}

const AppHeroContent = ({ title, className }: Props) => {
  return (
    <section>
      <Container
        className={cn(
          "col-center font-big-shoulders text-accent pt-28 text-[5rem] leading-[1em] font-black uppercase md:pt-36 md:text-[11.25rem]",
          className,
        )}
      >
        <h1>{title}</h1>
        <Sparkle className="mt-6.5 max-md:h-8 max-md:w-8" />
      </Container>
    </section>
  );
};

export default AppHeroContent;
