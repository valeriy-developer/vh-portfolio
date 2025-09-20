import Container from "@/components/Container";
import DividerNavLink from "@/components/DividerNavLink";
import StatisticItem from "@/components/StatisticItem";
import { experience } from "@/data/experience";
import { experienceStatistic } from "@/data/statistics";
import React from "react";
import CareerCard from "@/components/CareerCard";

const HomeExperience = () => {
  return (
    <section className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="Experience" url="/experience" />
        <ul className="mt-10 grid grid-cols-1 gap-x-0 gap-y-14 md:mt-16 md:grid-cols-2 md:gap-x-14 md:gap-y-18 lg:gap-x-17">
          {experience.slice(0, 4).map((expItem, idx) => (
            <CareerCard
              key={idx}
              career={expItem}
              className="border-secondary/10 md:[&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:pt-18"
            />
          ))}
        </ul>
        <ul className="mt-10 flex flex-wrap items-center justify-between gap-6 md:mt-16 md:grid md:grid-cols-3 md:gap-8">
          {experienceStatistic.slice(0, 3).map((statistic, idx) => (
            <StatisticItem
              key={idx}
              statistic={statistic}
              className="md:border-secondary/10 border-0 md:border-r [&:last-of-type]:border-0"
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HomeExperience;
