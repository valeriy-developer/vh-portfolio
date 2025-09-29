import Container from "@/components/Container";
import Sparkle from "@/components/icons/Sparkle";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { gsap } from "@/lib/gsap";
import React, { useEffect, useRef } from "react";

const HomeHero = () => {
  const isDesktop = useIsDesktop();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isDesktop) return;

    const img = imgRef.current;
    const container = containerRef.current;

    if (!img || !container) return;

    const ctx = gsap.context(() => {
      gsap.set(img, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        scale: 1,
      });

      let centerX = 0;
      let centerY = 0;

      const updateCenter = () => {
        const rect = container.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
      };

      updateCenter();

      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(img, {
          x: -(e.clientX - centerX) / 20,
          y: -(e.clientY - centerY) / 20,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(img, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("resize", updateCenter);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("resize", updateCenter);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section>
      <Container className="col-center pt-28 text-center md:pt-36">
        <p className="text-secondary-50 text-sm font-medium tracking-[0.08em] uppercase">
          Building interfaces since — Y:2020
        </p>
        <div ref={containerRef} className="relative mt-3 lg:mt-2.5">
          <h1 className="font-big-shoulders text-accent easing-text text-6xl leading-[1em] font-black tracking-[-0.02em] uppercase md:text-9xl lg:text-[12.5rem]">
            Valeriy <br /> Hnybidenko
          </h1>
          <img
            ref={imgRef}
            className={cn(
              "pointer-events-none absolute top-1/2 left-1/2 hidden rounded-full object-cover md:block md:h-42 md:w-28 lg:h-64 lg:w-40",
              !isDesktop && "vertical-img-animation",
            )}
            src="/images/vh-photo.png"
            alt="VH Photo"
          />
        </div>

        <Sparkle className="text-accent easing mt-8 h-8 w-8 md:h-12 md:w-12" />
        <p className="easing-text mt-8 max-w-[24rem] leading-[1.8em] md:max-w-[25rem] md:text-lg lg:max-w-[33rem] lg:text-[1.375rem]">
          I&rsquo;m Valeriy Hnybydenko — a frontend developer with 3+ years of
          experience building fast and maintainable apps with modern frameworks.
        </p>
        <ScrollIndicator />
      </Container>
    </section>
  );
};

export default HomeHero;
