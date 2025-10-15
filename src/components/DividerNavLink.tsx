import { NavigationLink } from "@/types";
import React from "react";
import TransitionLink from "./TransitionLink";

const DividerNavLink = ({ label, url }: NavigationLink) => {
  return (
    <TransitionLink
      href={url}
      className="group flex items-center justify-between gap-10"
    >
      <h3
        data-title
        className="font-big-shoulders text-accent h-underline-r shrink-0 text-[2rem] leading-[1.4em] font-bold tracking-[0.04em] uppercase"
      >
        {label}
      </h3>
      <div data-line className="relative flex h-1 w-full">
        <span className="bg-secondary-10 h-full w-full rounded-xl" />
        <span className="bg-accent h-full animate-[line-pulse_3s_ease-in-out_infinite] rounded-xl transition-all duration-200" />
        <div className="flex-center absolute top-1/2 right-0 h-6 w-6 -translate-y-1/2 md:h-7 md:w-7">
          <span className="bg-accent transition-[transform, background-color] absolute top-1/2 block h-1 w-full animate-[arrow-right-pulse_3s_ease-in-out_infinite] rounded-xl duration-200" />
          <span className="bg-accent transition-[transform, background-color] absolute top-1/2 block h-1 w-full animate-[arrow-left-pulse_3s_ease-in-out_infinite] rounded-xl duration-200" />
        </div>
      </div>
    </TransitionLink>
  );
};

export default DividerNavLink;
