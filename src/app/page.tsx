"use client";

import Container from "@/components/Container";
import Sparkle from "@/components/icons/Sparkle";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const isDesktop = useIsDesktop();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imgRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      imgRef.current.style.transform = `translate(-50%, -50%) translate(${-deltaX / 20}px, ${-deltaY / 20}px) scale(0.95)`;
    };

    const handleMouseLeave = () => {
      if (!imgRef.current) return;

      imgRef.current.style.transform = "translate(-50%, -50%)";
    };

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDesktop]);

  return (
    <Container className="pt-28 md:pt-36">
      <div className="col-center text-center">
        <p className="text-secondary-50 text-sm font-medium tracking-[0.08em] uppercase">
          Building interfaces since — Y:2020
        </p>
        <div ref={containerRef} className="relative mt-3 lg:mt-2.5">
          <h1 className="font-big-shoulders text-accent text-easing text-6xl leading-[1em] font-black tracking-[-0.02em] uppercase md:text-9xl lg:text-[12.5rem]">
            Valeriy <br /> Hnybidenko
          </h1>
          <img
            ref={imgRef}
            className={cn(
              "pointer-events-none absolute top-1/2 left-1/2 hidden rounded-full object-cover transition duration-100 ease-linear md:block md:h-42 md:w-28 lg:h-64 lg:w-40",
              !isDesktop && "animate-[idleFloat_6s_ease-in-out_infinite]",
            )}
            src="/images/vh-photo.jpg"
            alt="VH Photo"
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </div>

        <Sparkle className="text-accent mt-8 h-8 w-8 md:h-12 md:w-12" />
        <p className="text-easing mt-8 max-w-[24rem] leading-[1.8em] md:max-w-[25rem] md:text-lg lg:max-w-[33rem] lg:text-[1.375rem]">
          I’m Valeriy Hnybydenko — a frontend developer with 3+ years of
          experience building fast and maintainable apps with modern frameworks.
        </p>
      </div>
    </Container>
  );
};

export default HomePage;
