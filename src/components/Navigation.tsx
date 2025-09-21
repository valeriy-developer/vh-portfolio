"use client";

import { navigation } from "@/data/navigation";
import React from "react";
import TransitionLink from "./TransitionLink";

interface Props {
  handleDropdown: (val: boolean) => void;
}

const Navigation = ({ handleDropdown }: Props) => {
  return (
    <nav>
      <ul className="flex flex-col items-start gap-0.5">
        {navigation.map(({ label, url }, idx) => (
          <li key={idx} className="group" onClick={() => handleDropdown(false)}>
            <TransitionLink
              href={url}
              className="font-big-shoulders group-hover:text-accent easing-text text-3xl font-bold uppercase"
            >
              {label}
            </TransitionLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
