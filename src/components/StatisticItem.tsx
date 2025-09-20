import { cn } from "@/lib/utils";
import { Statistic } from "@/types";
import React from "react";

interface Props {
  statistic: Statistic;
  className?: string;
}

const StatisticItem = ({ statistic, className }: Props) => {
  return (
    <li
      className={cn(
        "md:border-secondary/10 border-0 capitalize md:border-r [&:last-of-type]:border-0",
        className,
      )}
    >
      <h2 className="text-accent text-[2.625rem] leading-[1em] font-semibold md:text-[2.875rem] lg:text-6xl">
        {statistic.count}+
      </h2>
      <p
        className="text-accent mt-2 text-sm lg:mt-4 lg:text-lg"
        dangerouslySetInnerHTML={{ __html: statistic.info }}
      />
    </li>
  );
};

export default StatisticItem;
