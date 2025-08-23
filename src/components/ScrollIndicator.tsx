import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => setScrollYPosition(window.pageYOffset);

  const checkVisibility = () => {
    const { scrollHeight, clientHeight } = document.documentElement;
    setIsVisible(scrollHeight > clientHeight);
  };

  useEffect(() => {
    checkVisibility();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    <div
      className={cn(
        "col-center text-secondary-50 fixed bottom-2 left-1/2 -translate-x-1/2 -translate-y-5 gap-1 opacity-0 transition-[translate,opacity] duration-300",
        scrollYPosition < 80 &&
          isVisible &&
          "-translate-x-1/2 translate-y-0 opacity-100",
      )}
    >
      <span className="text-[0.625rem] font-bold tracking-[0.08em] md:text-sm">
        SCROLL
      </span>
      <ChevronDown className="vertical-chevron-animation" size={18} />
    </div>
  );
};

export default ScrollIndicator;
