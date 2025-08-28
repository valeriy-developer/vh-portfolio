import { CareerItem } from "@/types";
import React from "react";

interface Props {
  career: CareerItem;
  className?: string;
}

const CareerCard = ({ career, className }: Props) => {
  return (
    <li className={className}>
      <h3 className="text-secondary text-xl font-semibold">{career.title}</h3>

      <div className="text-secondary/50 mt-2 flex flex-col font-medium">
        <span>{career.organization}</span>
        <span>{career.years}</span>
      </div>

      <p className="text-secondary mt-2 text-sm md:mt-5 md:text-base lg:text-lg">
        {career.description}
      </p>
    </li>
  );
};

export default CareerCard;
