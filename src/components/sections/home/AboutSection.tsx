import Container from "@/components/Container";
import DividerNavLink from "@/components/DividerNavLink";
import React from "react";

const AboutSection = () => {
  return (
    <section className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="About" url="/about" />
      </Container>
    </section>
  );
};

export default AboutSection;
