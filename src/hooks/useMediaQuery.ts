import { useEffect, useState } from "react";

type TBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const BREAKPOINTS: Record<TBreakpoint, string> = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

export const useMediaQuery = (breakpoint: TBreakpoint) => {
  const mediaQueryString = BREAKPOINTS[breakpoint];

  const getMatches = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(mediaQueryString).matches;
  };

  const [matches, setMatches] = useState<boolean>(getMatches);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(mediaQueryString);

    const handleChange = () => setMatches(mediaQueryList.matches);

    handleChange();
    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [mediaQueryString]);

  return matches;
};

// convenience wrapper around useMediaQuery to avoid rewriting the same code everywhere

export const useIsDesktop = () => {
  return useMediaQuery("lg");
};

export const useIsTablet = () => {
  return useMediaQuery("md");
};
