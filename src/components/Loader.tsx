"use client";

import { useGSAP, gsap } from "@/lib/gsap";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { useLoader } from "@/providers/LoaderProvider";

const Loader = () => {
  const { isLoading, setIsLoading } = useLoader();

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    const counterObj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    tl.to(counterObj, {
      val: 100,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counterObj.val) + "%";
        }
      },
    });

    tl.to(
      loaderRef.current!,
      {
        opacity: 0,
        yPercent: -100,
        duration: 1,
        ease: "power3.inOut",
      },
      "+=0.3",
    );
  });

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className={cn(
        "bg-primary text-secondary fixed inset-0 z-[9999] flex items-center justify-center",
      )}
    >
      <span
        ref={counterRef}
        className="font-big-shoulders text-5xl tracking-wider md:text-7xl"
      >
        0%
      </span>
    </div>
  );
};

export default Loader;
