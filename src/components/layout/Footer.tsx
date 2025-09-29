"use client";

import React, { useRef } from "react";
import AppContact from "../AppContact";
import Marquee from "react-fast-marquee";
import { contacts } from "@/data/contacts";
import Sparkle from "../icons/Sparkle";
import { useGSAP, SplitText, gsap } from "@/lib/gsap";
import { usePathname } from "next/navigation";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const splitTitle = SplitText.create("[data-title]", {
        type: "chars",
        mask: "chars",
      });
      const splitText = SplitText.create("[data-text]", {
        type: "lines",
        mask: "lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      tl.from(splitTitle.chars, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.inOut",
      });
      tl.from(
        "[data-line]",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<20%",
      );
      tl.from(
        splitText.lines,
        {
          y: 40,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
        },
        "<70%",
      );
      tl.from(
        "[data-contacts]",
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
        },
        "<40%",
      );
      tl.from(
        "[data-form]",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<50%",
      );
      tl.from(
        "[data-ticker]",
        {
          opacity: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "<",
      );
    },
    { scope: footerRef, dependencies: [pathname] },
  );

  return (
    <footer ref={footerRef} className="flex flex-col gap-6 md:gap-10">
      <AppContact />

      <div data-ticker>
        <Marquee
          speed={120}
          autoFill
          pauseOnHover
          className="overflow-y-hidden"
        >
          <div className="mr-14 flex items-center gap-14 md:mr-18 md:gap-18">
            {contacts
              .filter(({ id }) =>
                ["facebook", "github", "linkedin"].includes(id),
              )
              .map(({ href, label, id, shortId }) => (
                <div key={id} className="flex items-center gap-14 md:gap-18">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-accent font-big-shoulders hover:text-secondary easing-text group relative text-[15rem] leading-[1em] font-black uppercase max-md:leading-[1.2em] md:text-[20rem]"
                  >
                    <span className="bg-accent group-hover:bg-secondary transition-[background-color, width] absolute top-1/2 left-1/2 block h-8 w-0 -translate-1/2 duration-200 ease-in group-hover:w-[120%]" />
                    {shortId}
                  </a>
                  <Sparkle className="text-secondary/10 h-11 w-11 md:h-14 md:w-14" />
                </div>
              ))}
          </div>
        </Marquee>
      </div>
    </footer>
  );
};

export default Footer;
