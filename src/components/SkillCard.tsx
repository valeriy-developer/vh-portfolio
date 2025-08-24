import { TechnologyItem } from "@/types";
import React from "react";

const SkillCard = ({ technology }: { technology: TechnologyItem }) => {
  return (
    <div className="bg-accent text-primary mx-auto flex w-full items-center gap-4 rounded-lg p-6 lg:gap-8">
      <div>
        <h3 className="text-xl font-bold md:text-2xl lg:text-[1.625rem]">
          {technology.label}
        </h3>
        <p className="mt-1 text-sm leading-[1em] md:mt-2 md:text-base lg:text-lg">
          {technology.description}
        </p>
      </div>
      <div className="bg-primary-10 w-0.5 self-stretch" />
      <p className="text-primary-30 text-4xl font-semibold md:text-5xl lg:text-6xl">
        {technology.percent}%
      </p>
    </div>
  );
};

export default SkillCard;
