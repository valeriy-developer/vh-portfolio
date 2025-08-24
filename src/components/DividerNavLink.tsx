import { NavigationLink } from "@/types";
import Link from "next/link";
import React from "react";

const DividerNavLink = ({ label, url }: NavigationLink) => {
  return (
    <Link href={url} className="group flex items-center justify-between gap-10">
      <h3 className="font-big-shoulders text-accent text-[2rem] font-bold tracking-[0.04em] uppercase">
        {label}
      </h3>
      <div className="relative flex h-1 w-full">
        <span className="bg-secondary-10 h-full w-full" />
        <span className="bg-accent h-full w-10 transition-all duration-200 group-hover:mx-10 group-hover:w-25" />
        <div className="flex-center absolute top-1/2 right-0 h-7 w-7 -translate-y-1/2">
          <span className="bg-accent absolute top-1/2 block h-1 w-full -translate-y-1/2 transition-transform duration-200 group-hover:-translate-y-[270%] group-hover:rotate-45" />
          <span className="bg-accent absolute bottom-1/2 block h-1 w-full translate-y-1/2 transition-transform duration-200 group-hover:translate-y-[270%] group-hover:-rotate-45" />
        </div>
      </div>
    </Link>
  );
};

export default DividerNavLink;
