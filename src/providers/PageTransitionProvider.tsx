"use client";

import { createContext, useContext, ReactNode, RefObject } from "react";
import { usePageTransitionAnimation } from "@/hooks/usePageTransition";
import Logo from "@/components/icons/Logo";
import { useIsDesktop } from "@/hooks/useMediaQuery";

interface TransitionContextType {
  coverPage: (url: string) => void;
  blocksRef: RefObject<HTMLDivElement[]>;
  logoOverlayRef: RefObject<HTMLDivElement | null>;
}

const TransitionContext = createContext<TransitionContextType>({
  coverPage: () => {},
  blocksRef: { current: [] },
  logoOverlayRef: { current: null },
});

const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const { blocksRef, logoOverlayRef, coverPage } = usePageTransitionAnimation();
  const isDesktop = useIsDesktop();
  const blocksToShow = isDesktop ? 20 : 10;

  return (
    <TransitionContext.Provider
      value={{ coverPage, blocksRef, logoOverlayRef }}
    >
      <div className="pointer-events-none fixed top-0 left-0 z-55 flex h-svh w-screen">
        {Array.from({ length: blocksToShow }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) blocksRef.current[i] = el;
            }}
            className="bg-primary h-full flex-1 origin-left scale-x-0"
          />
        ))}
      </div>

      <div
        ref={logoOverlayRef}
        className="flex-center bg-primary text-foreground pointer-events-none fixed top-0 left-0 z-60 h-svh w-screen opacity-0"
      >
        <Logo className="h-16 w-16 md:h-24 md:w-24" />
      </div>

      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = (): TransitionContextType => {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition must be used within PageTransitionProvider",
    );
  }

  return context;
};

export default PageTransitionProvider;
