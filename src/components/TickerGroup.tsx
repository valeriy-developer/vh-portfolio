import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

interface Props {
  speed?: number;
  className?: string;
  firstMarqueeDirection?: "left" | "right";
  secondMarqueeDirection?: "left" | "right";
  children: React.ReactNode;
}

const TickerGroup = ({
  speed = 80,
  firstMarqueeDirection = "left",
  secondMarqueeDirection = "right",
  children,
  className,
}: Props) => {
  return (
    <div className={cn("relative flex flex-col gap-3", className)}>
      <div className="easing from-primary via-primary/90 pointer-events-none absolute top-0 -right-1 z-10 h-full w-20 bg-gradient-to-l to-transparent" />
      <div className="easing from-primary via-primary/90 pointer-events-none absolute top-0 -left-1 z-10 h-full w-20 bg-gradient-to-r to-transparent" />
      <Marquee
        direction={firstMarqueeDirection}
        autoFill
        speed={speed}
        className="overflow-hidden!"
      >
        {children}
      </Marquee>
      <Marquee
        direction={secondMarqueeDirection}
        autoFill
        speed={speed}
        className="overflow-hidden!"
      >
        {children}
      </Marquee>
    </div>
  );
};

export default TickerGroup;
