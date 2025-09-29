import { TechnologyItem } from "@/types";
import React from "react";

const SkillCard = ({ technology }: { technology: TechnologyItem }) => {
  return (
    <li
      data-items
      className="bg-accent text-primary mx-auto grid w-full grid-cols-[1fr_auto_min(78px)] items-center rounded-lg p-6 md:grid-cols-[1fr_auto_min(100px)] lg:grid-cols-[1fr_auto_min(118px)]"
    >
      <div>
        <h3 className="text-xl font-bold md:text-2xl lg:text-[1.625rem] lg:leading-[1.1em]">
          {technology.label}
        </h3>
        <p className="mt-1 text-sm md:mt-2 md:text-base lg:text-lg">
          {technology.description}
        </p>
      </div>

      <div className="bg-primary-10 mr-6 ml-3 w-0.5 self-stretch" />

      <p className="text-primary-30 text-right text-4xl font-semibold md:text-5xl lg:text-6xl">
        {technology.percent}%
      </p>
    </li>
  );
};

export default SkillCard;
