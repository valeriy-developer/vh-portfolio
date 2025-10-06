"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import ReactLenis, { LenisRef, useLenis } from "lenis/react";
import React, { useEffect, useRef } from "react";

const SmoothScroll = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const lenisRef = useRef<LenisRef>(null);
  const lenis = useLenis();

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    lenis?.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis ref={lenisRef} root options={{ autoRaf: false, lerp: 0.06 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
