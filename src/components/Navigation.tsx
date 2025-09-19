"use client";

import { navigation } from "@/data/navigation";
import Link from "next/link";
import React from "react";

interface Props {
  handleDropdown: (val: boolean) => void;
}

const Navigation = ({ handleDropdown }: Props) => {
  return (
    <nav>
      <ul className="flex flex-col items-start gap-0.5">
        {navigation.map(({ label, url }, idx) => (
          <li key={idx} className="group" onClick={() => handleDropdown(false)}>
            <Link
              href={url}
              className="font-big-shoulders group-hover:text-accent easing-text text-3xl font-bold uppercase"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
