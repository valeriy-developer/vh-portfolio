import Container from "@/components/Container";
import DividerNavLink from "@/components/DividerNavLink";
import { education } from "@/data/education";
import React from "react";
import CareerCard from "@/components/CareerCard";

const HomeEducation = () => {
  return (
    <section className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="Education" url="/education" />
        <ul className="mt-10 grid grid-cols-1 gap-x-0 gap-y-14 md:mt-16 md:grid-cols-2 md:gap-x-14 md:gap-y-18 lg:gap-x-17">
          {education.slice(0, 4).map((educationItem, idx) => (
            <CareerCard key={idx} career={educationItem} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HomeEducation;
