"use client";

import { usePageTransition } from "@/providers/PageTransitionProvider";
import React, { ReactNode } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className,
}) => {
  const { coverPage } = usePageTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    coverPage(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
