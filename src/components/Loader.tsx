"use client";

import { useGSAP, gsap } from "@/lib/gsap";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useLoader } from "@/providers/LoaderProvider";
import Container from "./Container";
import { useLenis } from "lenis/react";

const Loader = () => {
  const { isLoading, setIsLoading } = useLoader();
  const lenis = useLenis();

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (
        !isLoading ||
        !loaderRef.current ||
        !counterRef.current ||
        !lineRef.current
      )
        return;

      const counterObj = { val: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          lenis?.scrollTo(0, { immediate: true });
          setIsLoading(false);
        },
      });

      tl.to(counterObj, {
        val: 100,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          const val = Math.round(counterObj.val);
          counterRef.current!.textContent = val + "%";
          lineRef.current!.style.maxWidth = `${val}%`;
        },
      });
      tl.to(loaderRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
        ease: "power3.inOut",
      });
    },
    { dependencies: [isLoading] },
  );

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
  }, [isLoading, lenis]);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className={cn("bg-primary text-secondary fixed inset-0 z-[9999] pb-10")}
    >
      <Container className="flex h-full flex-col items-end justify-end gap-4">
        <span
          ref={counterRef}
          className="font-big-shoulders text-5xl tracking-wider md:text-7xl"
        >
          0%
        </span>
        <div
          ref={lineRef}
          className="bg-secondary mr-auto h-[2px] w-full max-w-0 transition-[max-width] duration-100 ease-linear"
        />
      </Container>
    </div>
  );
};

export default Loader;
