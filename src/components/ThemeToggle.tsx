"use client";

import React, { useEffect, useRef, useState } from "react";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
import { gsap } from "@/lib/gsap";
import { useLenis } from "lenis/react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(resolvedTheme === "dark");
  const [isAnimating, setIsAnimating] = useState(false);
  const revealerRef = useRef<HTMLDivElement | null>(null);
  const lenis = useLenis();

  const toggleThemeWithReveal = (checked: boolean) => {
    if (!revealerRef?.current || isAnimating) return;

    setIsAnimating(true);
    lenis?.stop();

    const newTheme = checked ? "dark" : "light";
    setIsDarkMode(checked);

    const tl = gsap.timeline({
      onComplete: () => {
        lenis?.start();
        setIsAnimating(false);
      },
    });

    tl.to(revealerRef.current, {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 1,
      ease: "power3.inOut",
    });

    tl.add(() => {
      setTheme(newTheme);
    });

    tl.to(revealerRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.6,
      ease: "power2.out",
      delay: 0.4,
    });
  };

  useEffect(() => {
    revealerRef.current = document.querySelector("[data-theme-revealer]");
  }, []);

  return (
    <Switch
      id="toggle-theme"
      checked={isDarkMode}
      onCheckedChange={toggleThemeWithReveal}
      aria-label="Toggle theme"
      disabled={isAnimating}
    />
  );
};

export default ThemeToggle;
