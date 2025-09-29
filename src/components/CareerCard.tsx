import { cn } from "@/lib/utils";
import { CareerItem } from "@/types";
import React from "react";

interface Props {
  career: CareerItem;
  className?: string;
}

const CareerCard = ({ career, className }: Props) => {
  return (
    <li
      data-items
      className={cn("relative md:[&:nth-child(n+3)]:pt-18", className)}
    >
      <span
        data-card-line
        className={cn(
          "bg-secondary/10 pointer-events-none absolute top-0 left-0 h-px w-full",
          "hidden md:[li:nth-child(n+3)_&]:block",
        )}
      />

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
