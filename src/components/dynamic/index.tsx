"use client";

import dynamic from "next/dynamic";

export const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

export const ThemeProvider = dynamic(
  () => import("@/providers/ThemeProvider"),
  {
    ssr: false,
  },
);
