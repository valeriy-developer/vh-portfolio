import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="col-center text-secondary-50 mt-8 gap-1 opacity-100 transition-[translate,opacity] duration-300 md:mt-18">
      <span className="text-[0.625rem] leading-[1em] font-bold tracking-[0.08em] md:text-sm">
        SCROLL
      </span>
      <ChevronDown className="vertical-chevron-animation" size={18} />
    </div>
  );
};

export default ScrollIndicator;
