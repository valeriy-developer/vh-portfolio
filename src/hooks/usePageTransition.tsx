"use client";

import { RefObject, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLenis } from "lenis/react";

interface usePageTransitionAnimationReturn {
  blocksRef: RefObject<HTMLDivElement[]>;
  logoOverlayRef: RefObject<HTMLDivElement | null>;
  logoRef: RefObject<SVGSVGElement | null>;
  isAnimate: boolean;
  coverPage: (url: string) => void;
}

export const usePageTransitionAnimation =
  (): usePageTransitionAnimationReturn => {
    const [isAnimate, setIsAnimate] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const lenis = useLenis();

    const blocksRef = useRef<HTMLDivElement[]>([]);
    const logoOverlayRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<SVGSVGElement | null>(null);

    useGSAP(
      () => {
        if (!blocksRef.current.length) return;

        gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

        gsap.to(blocksRef.current, {
          scaleX: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.out",
          transformOrigin: "right",
          onComplete: () => {
            setIsAnimate(false);
            lenis?.start();
          },
        });
      },
      { dependencies: [pathname], revertOnUpdate: true },
    );

    useGSAP(
      () => {
        document.body.classList.toggle("overflow-y-hidden", isAnimate);
        document.body.classList.toggle("pointer-events-none", isAnimate);
      },
      { dependencies: [isAnimate] },
    );

    const coverPage = (url: string) => {
      if (isAnimate || url === pathname) return;

      const pathEl = logoRef.current?.querySelector(
        "[data-animation-path]",
      ) as SVGPathElement;

      lenis?.stop();
      setIsAnimate(true);

      const tl = gsap.timeline({
        onComplete: () => router.push(url),
      });

      tl.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.4,
        transformOrigin: "left",
        stagger: 0.02,
        ease: "power2.out",
      });
      tl.to(logoOverlayRef.current, { opacity: 1, duration: 0.2 }, "-=0.2");

      if (pathEl) {
        const len = pathEl.getTotalLength();

        gsap.set(pathEl, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });

        tl.to(pathEl, {
          strokeDashoffset: 0,
          duration: 1.3,
          ease: "power2.out",
        });
      }

      tl.to(logoOverlayRef.current, { opacity: 0, duration: 0.2 }, "+=0.3");
    };

    return { blocksRef, logoOverlayRef, logoRef, isAnimate, coverPage };
  };
