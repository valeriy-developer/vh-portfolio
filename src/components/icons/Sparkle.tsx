import { cn } from "@/lib/utils";
import React from "react";

interface iProps {
  className?: string;
}

const Sparkle: React.FC<iProps> = ({ className }) => {
  return (
    <svg
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      className={cn("easing", className)}
    >
      <path
        d="M 22.75 48 C 20.903 37.41 10.483 27.457 0 25.25 L 0 22.625 C 10.549 20.105 20.686 10.941 22.75 0 L 25.375 0 C 27.169 10.66 37.542 20.343 48 22.625 L 48 25.25 C 37.735 27.377 27.106 37.364 25.375 48 Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default Sparkle;
