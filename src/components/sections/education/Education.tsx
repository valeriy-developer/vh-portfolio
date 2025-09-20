import CareerCard from "@/components/CareerCard";
import Container from "@/components/Container";

import { education } from "@/data/education";

import React from "react";

const EducationSection = () => {
  return (
    <section className="pt-20 md:pt-25">
      <Container>
        <ul className="grid grid-cols-1 gap-x-0 gap-y-14 md:grid-cols-2 md:gap-x-14 md:gap-y-18 lg:gap-x-17">
          {education.map((educationItem, idx) => (
            <CareerCard key={idx} career={educationItem} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default EducationSection;
