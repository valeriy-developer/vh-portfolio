"use client";

import gsap from "gsap";
import ReactLenis, { LenisRef } from "lenis/react";
import React, { useEffect, useRef } from "react";

const SmoothScroll = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis ref={lenisRef} root options={{ autoRaf: false, lerp: 0.06 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
