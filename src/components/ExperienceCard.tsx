import { ExperienceItem } from "@/types";
import React from "react";

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <li className="border-secondary/10 md:[&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:pt-18">
      <h3 className="text-secondary text-xl font-semibold">
        {experience.position}
      </h3>

      <div className="text-secondary/50 mt-2 flex flex-col font-medium">
        <span>{experience.company}</span>
        <span>{experience.years}</span>
      </div>

      <p className="text-secondary mt-2 text-sm md:mt-5 md:text-base lg:text-lg">
        {experience.description}
      </p>
    </li>
  );
};

export default ExperienceCard;
