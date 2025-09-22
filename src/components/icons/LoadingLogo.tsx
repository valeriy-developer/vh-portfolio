"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  logoRef?: React.Ref<SVGSVGElement>;
}

const LoadingLogo: React.FC<Props> = ({ logoRef, className }) => {
  return (
    <svg
      ref={logoRef}
      width="75"
      height="74"
      className={cn(className)}
      viewBox="0 0 75 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.08918 34.2409C5.08907 43.9315 -6.05255 94.3677 14.4596 60.3819C34.9718 26.3961 34.1985 27.3099 34.9716 26.3962C55.587 24.6061 70.3602 5.14161 62.2781 2.40056C47.3997 -2.64541 41.5 54.5 36.8582 66.6472C45 51.5 52.8117 38.7889 66.0243 37.3345C76.004 37.3345 55.7243 58.7762 66.0243 64.2418C67.4299 64.9876 72.0684 60.3819 72.0684 60.3819"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LoadingLogo;
