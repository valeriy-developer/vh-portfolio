"use client";

import { navigation } from "@/data/navigation";
import React from "react";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  handleDropdown: (val: boolean) => void;
}

const Navigation = ({ handleDropdown }: Props) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col items-start gap-0.5">
        {navigation.map(({ label, url }, idx) => {
          const isActive = pathname === url;

          return (
            <li
              key={idx}
              className="group"
              onClick={() => handleDropdown(false)}
            >
              <TransitionLink
                href={url}
                className={cn(
                  "font-big-shoulders easing-text group-hover:text-accent text-3xl font-bold uppercase",
                  isActive && "text-accent",
                )}
              >
                {label}
              </TransitionLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
