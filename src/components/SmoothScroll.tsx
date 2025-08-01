"use client";

import ReactLenis from "lenis/react";
import React from "react";

const SmoothScroll = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactLenis root options={{ lerp: 0.06 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
